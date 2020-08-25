import React from "react";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const MenuList = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Party Package #1</CardTitle>
          <CardSubtitle>about this package</CardSubtitle>
          <CardText>Full contents of package</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Party Package #2</CardTitle>
          <CardSubtitle>about this package</CardSubtitle>
          <CardText>Full contents of package</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Party Package #3</CardTitle>
          <CardSubtitle>about this package</CardSubtitle>
          <CardText>Full contents of package</CardText>
        </CardBody>
      </Card>
      <Button>Book Now!</Button>
    </CardDeck>
  );
};

export default MenuList;