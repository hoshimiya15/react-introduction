import React from "react";

export const ColorfulMessage = (props) => {
  // props.color, props.childrenに分割代入
  // <p>ここをpropsとして渡すときはprops.childrenになる</p>
  const { color, children } = props;
  const contentStyle = {
    // color: props.colorになる場合は、color: colorに省略可能
    // さらに下のようにcolor: colorをcolorのみに省略可能
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
