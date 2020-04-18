import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';


class Header extends Component {



  render() {
    const backgroundColor = this.props.darkMode?  "#686868" :"#4e8cff";
    const color = this.props.darkMode?  "black" :"white";

    const scHeader = {
      background: backgroundColor,
      minHeight: "75px",
      borderTopLeftRadius: "9px",
      borderTopRightRadius: "9px",
      color: color,
      padding: "10px",
      //boxShadow: "0 1px 4px rgba(0,0,0,.2);
      position: "relative",
      boxSizing: "border-box",
      display: "flex",
      fontFamily: this.props.fontStyleMessage
    };


    return (
      <div style={scHeader}>
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div className="sc-header--close-button" onClick={this.props.onClose}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
