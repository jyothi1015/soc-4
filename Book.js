import React from "react";

function Book(props) {
  return (
    <div className="box">
      <img src={props.img} width={"100px"} height={"100px"} alt="avatar_img" />
      <p>{props.title}</p>
      <p>{props.PRICE}</p>
    </div>
  );
}
export default Book