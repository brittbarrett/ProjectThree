import React from "react";
import "./ImageOverlay.css";


import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button,
  Col
} from "reactstrap";

const ImageOverlay = () => {
  return (
    <Col md="12">
      <div className="imgOverlayClearTop">

      </div>
      <div className="box" id="mainLogo">

      </div>
      <div>
      
      {/* <Button className="text-center" href="/booking">Book Now!</Button> */}
      </div>
      <div className="imgOverlayClearBottom">

      </div>
      
    </Col>
  );
};

export default ImageOverlay;
