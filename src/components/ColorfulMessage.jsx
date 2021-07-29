import React from "react";

const ColorfulMessage = (props) => {
  //分割代入。propsの記載が不要になる
  const { color, children } = props;
  const contentStyle = {
    //colorだけの記載でもいける
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
