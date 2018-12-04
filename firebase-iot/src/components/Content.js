import React, { Component } from "react";
import Fire from "./Fire";
import IndoorChart from "./IndoorChart";
import OutdoorChart from "./OutdoorChart";

const rootRef = Fire.database().ref();
const remoteRef = rootRef.child("remote");
const currentRef = rootRef.child("current");
const indoorNowRef = currentRef.child("indoorNow");
const outdoorNowRef = currentRef.child("outdoorNow");
const remoteNowRef = currentRef.child("remoteNow");
const recordRef = currentRef.child("total");

class Content extends Component {
  constructor() {
    super();
    this.state = {
      indoor: 0,
      outdoor: 0,
      remote: 0,
      indoorIdx: 0,
      outdoorIdx: 0,
      remoteIdx: 0,
      numrecords: 0,
      status: "unknown"
    };

    this.tempUp = this.tempUp.bind(this);
    this.tempDown = this.tempDown.bind(this);
  }

  tempDown = () => {
    var now = new Date();
    this.setState(
      {
        remote: Number(this.state.remote) - 1,
        numrecords: Number(this.state.numrecords) + 1
      },
      () => {
        rootRef.update({
          index: this.state.numrecords.toString(),
          remote: this.state.remote.toString()
        });
        remoteRef.push({
          time: now.toLocaleString(),
          index: this.state.numrecords.toString(),
          remote: this.state.remote.toString()
        });
      }
    );
  };

  tempUp = () => {
    var now = new Date();
    this.setState(
      {
        remote: Number(this.state.remote) + 1,
        numrecords: Number(this.state.numrecords) + 1
      },
      () => {
        rootRef.update({
          index: this.state.numrecords.toString(),
          remote: this.state.remote.toString()
        });
        rootRef.push({
          time: now.toLocaleString(),
          index: this.state.numrecords.toString(),
          remote: this.state.remote.toString()
        });
      }
    );
  };

  componentDidMount() {
    indoorNowRef.on("value", snapshot => {
      this.setState({
        indoor: snapshot.val()
      });
    });

    outdoorNowRef.on("value", snapshot => {
      this.setState({
        outdoor: snapshot.val()
      });
    });

    recordRef.on("value", snapshot => {
      this.setState({
        numrecords: snapshot.val()
      });
    });

    remoteNowRef.on("value", snapshot => {
      this.setState({
        remote: snapshot.val()
      });
    });
  }

  render() {
    return (
      <header className="masthead bg-primary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  <div
                    className="card mb-3 print-temperature"
                    id="air-conditioner"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">
                      <h6>Air Conditioner</h6>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{this.state.remote} °C</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-6">
                  <div
                    className="card mb-3 print-temperature"
                    id="indoor-temperature"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">
                      <h6>Indoor Temperature</h6>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{this.state.indoor} °C</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  <div
                    className="card mb-3 print-temperature"
                    id="outdoor-temperature"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">
                      <h6>Outdoor Temperature</h6>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{this.state.outdoor} °C</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-6">
                  <div
                    className="card mb-3 print-temperature"
                    id="number-of-record"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">
                      <h6>Number of records</h6>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{this.state.numrecords}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  <div
                    className="card mb-3 print-temperature"
                    id="control-temperature"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">
                      <h6>Control Temperature</h6>
                    </div>
                    <div className="card-body">
                      <div className="btn btn-group">
                        <button
                          type="button"
                          className="btn btn-danger btn-lg fa fa-chevron-down"
                          id="down-btn"
                          aria-hidden="true"
                          onClick={this.tempDown}
                        />
                        <button
                          type="button"
                          className="btn btn-success btn-lg fa fa-chevron-up"
                          id="up-btn"
                          aria-hidden="true"
                          onClick={this.tempUp}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-6">
                  <div
                    className="card text-white bg-danger mb-3 status"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">
                      <h6>Status</h6>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{this.state.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-6">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <div
                    className="card mb-12 bg-light"
                    style={{ maxWidth: "36rem" }}
                  >
                    <div className="card-header">
                      <h6>Indoor Chart</h6>
                    </div>
                    <div className="card-body">
                      <IndoorChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <div
                    className="card mb-6 bg-light"
                    style={{ maxWidth: "36rem" }}
                  >
                    <div className="card-header">
                      <h6>Outdoor Chart</h6>
                    </div>
                    <div className="card-body">
                      <OutdoorChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Content;
