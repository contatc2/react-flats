import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({
      clicked: true
    });
  }

  render () {
    const url = this.props.imageUrl;
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${url})`
    };
    return (
      <div
        className="card"
        style={cardStyle}
        onClick={this.handleClick}
      >
        <div className="card-category">
          {this.props.price} {this.props.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>
    );
  }
}

export default Flat;
