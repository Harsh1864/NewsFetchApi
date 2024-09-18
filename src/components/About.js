import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
  
    return (
    
      <div className="container my-5">
        <div className="card shadow-lg p-4">
          <h1 className="text-center mb-4">
            About <span className="text-primary">Daily News</span>
          </h1>
          <p className="lead text-center">
            Welcome to <strong>Daily News</strong>, your number one source for
            the latest news updates. We're dedicated to providing you with the
            latest and most accurate news from various categories including
            business, technology, entertainment, health, science, and sports.
          </p>
          <hr className="my-4" />
          <p className="text-center">
            Founded in 2024, our mission is to keep you informed with the most
            recent and reliable news, while ensuring a user-friendly experience.
            Whether you're on the go or relaxing at home, Daily News brings the
            world to your fingertips.
          </p>

          <div className="row my-4">
            <div className="col-md-4 text-center">
              <div className="card border-0">
                <div className="card-body">
                  <i className="fas fa-bullseye fa-3x text-primary mb-3"></i>
                  <h5>
                    <strong>Accuracy</strong>
                  </h5>
                  <p>
                    We strive to deliver precise and well-researched
                    information.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card border-0">
                <div className="card-body">
                  <i className="fas fa-bolt fa-3x text-success mb-3"></i>
                  <h5>
                    <strong>Speed</strong>
                  </h5>
                  <p>
                    Our platform is constantly updated to keep you informed with
                    the latest developments.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card border-0">
                <div className="card-body">
                  <i className="fas fa-globe fa-3x text-warning mb-3"></i>
                  <h5>
                    <strong>Diversity</strong>
                  </h5>
                  <p>
                    We cover a wide range of topics to cater to diverse
                    interests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="lead">
              Thank you for choosing <strong>Daily News</strong>. Stay informed,
              stay ahead.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
