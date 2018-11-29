import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <header className="masthead bg-primary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div
                className="card mb-3 print-temperature"
                id="indoor-temperature"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">
                  <h6>Indoor Temperature</h6>
                </div>
                <div className="card-body">
                  <p className="card-text">25 °C</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="card mb-3 print-temperature"
                id="outdoor-temperature"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">
                  <h6>Outdoor Temperature</h6>
                </div>
                <div className="card-body">
                  <p className="card-text">30 °C</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="card mb-3 print-temperature"
                id="control-temperature"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">
                  <h6>Control Temperature</h6>
                </div>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg fa fa-chevron-up"
                    id="down-btn"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="btn btn-success btn-lg fa fa-chevron-down"
                    id="up-btn"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="card mb-3 print-temperature"
                id="number-of-record"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">
                  <h6>Number of records</h6>
                </div>
                <div className="card-body">
                  <p className="card-text">10000</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="row">
            <h1>This is Dashboard</h1>
            <p>
              The background images for the slider are set directly in the HTML
              using inline CSS. The rest of the styles for this template are
              contained within the <code>half-slider.css</code> file.
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Content;