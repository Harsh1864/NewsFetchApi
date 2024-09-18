import React from "react";

const NewsItem = (props) => {
  let { title, desc, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="row">
      <div className="col-md-4 d-flex align-items-stretch mb-4">
        <div
          className="card h-100 shadow-lg"
          style={{ borderRadius: "15px", minWidth: "18rem" }}
        >
          <div className="position-relative">
            <span
              className="position-absolute badge rounded-pill bg-danger"
              style={{
                top: "10px",
                right: "10px",
                zIndex: "1",
              }}
            >
              {source}
            </span>
            <img
              src={imageUrl}
              className="card-img-top"
              alt="news"
              style={{
                height: "150px",
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-primary">
              {title.length > 50 ? title.slice(0, 50) + "..." : title}
            </h5>
            <p className="card-text flex-grow-1">{desc}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <div className="d-grid gap-2">
              <a
                href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
                style={{ borderRadius: "25px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
