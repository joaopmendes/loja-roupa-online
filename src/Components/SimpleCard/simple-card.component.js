import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
const SimpleCard = ({ cardTitle, children, width }) => {
  return (
    <MDBCard style={{ width: width || "22rem" }}>
      <MDBCardBody>
        <MDBCardTitle>{cardTitle}</MDBCardTitle>
        <MDBCardText>{children}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SimpleCard;
