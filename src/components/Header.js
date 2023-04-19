import React from "react";
import ticketsImage from "./../img/tickets-image.png";

function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt="An image of two tickets" />
    </React.Fragment>
  );
}

export default Header;
