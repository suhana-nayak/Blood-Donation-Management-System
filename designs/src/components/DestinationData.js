import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
        <div className="first-des">
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>

        <div className="image">
            <img alt="img1" src={this.props.img1} />
        </div>
    </div>
    );
  }
}

export default DestinationData;