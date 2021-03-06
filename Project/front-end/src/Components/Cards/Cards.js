import React, { Component } from "react";
import "./Cards.css";

class EventCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  handleChecked = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    return (
      <div className="bg">
        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card1"
              checked={this.state.checked}
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front">
                <div className="inner">
                  <h2 className="inner-text">Plantation in Beirut</h2>

                  <label
                    className="button"
                    aria-hidden="true"
                    onClick={this.handleChecked}
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="info">
                    <span>15</span>
                    <div className="icon">
                      <i className="fas fa-users" />
                      <span>people going</span>
                    </div>
                  </div>
                  <div className="info">
                    <span>44</span>
                    <div className="icon">
                      <i class="fas fa-seedling"></i>
                      <span>seeds</span>
                    </div>
                  </div>

                  <div className="description">
                    <p>
                     YES YES YES WE'RE ARRIVING TO Beirut !
                    </p>
                    <p>
                     Please make sure you have gloves, do not worry about the tools.
                     Tools will be provided by us for free of charge as well as some professional techniques
                     from some of our guests. Looking forward to see you there !!
                    </p>
                  </div>
                  <div className="location">Sanayeh Garden</div>

                  <label
                    htmlFor="card1"
                    className="button return"
                    aria-hidden="true"
                    onClick={this.handleChecked}
                  >
                    <i className="fas fa-arrow-left" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCards;
