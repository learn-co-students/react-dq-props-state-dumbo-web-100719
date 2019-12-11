import React, { Component } from "react";
import Master from "./assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "./db.js";

const eyeColors = [{ name: "Blue" }, { name: "Sun" }, { name: "Glowing" }];
export default class MasterHog extends Component {
  constructor() {
    super();
    this.state = {
      eyeColor: "sun"
    };
  }
  // getEyeColor = () => {
  //   eyeColors.map(color => {
  //     console.log(color);
  //   });
  // };
  changeEyeColor = e => {
    this.setState({
      eyeColor: e.target.value
    });
  };

  render() {
    return (
      <div>
        {/* <input
          type="radio"
          name="eyeColor"
          value="blue"
          onChange={this.changeEyeColor}
        />
        Blue<br></br>
        <input
          type="radio"
          name="eyeColor"
          value="sun"
          onChange={this.changeEyeColor}
        />
        Sun<br></br>
        <input
          type="radio"
          name="eyeColor"
          value="glowing"
          onChange={this.changeEyeColor}
        />
        Glowing */}
        {eyeColors.map(color => (
          // color => console.log(color.name)
          <div>
            <input
              key={color.name}
              checked={
                this.state.eyeColor === color.name.toLocaleLowerCase()
                  ? true
                  : false
              }
              type="radio"
              name={this.state.eyeColor}
              value={color.name}
              onChange={this.changeEyeColor}
            />{" "}
            {color.name}
          </div>
        ))}
        <br></br>
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        <ul className="hoglist">
          {offspring.map(baby => (
            <BabyHog
              key={baby.id}
              name={baby.name}
              hobby={baby.hobby}
              eyeColor={this.state.eyeColor.toLowerCase()}
            />
          ))}
        </ul>
      </div>
    );
  }
}
