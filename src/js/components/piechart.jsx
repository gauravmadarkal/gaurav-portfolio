import React from "react";
export default function PieChart({ title, value }) {
  const stripValue = value.substring(0, value.length - 1);
  //   console.log(stripValue);
  return (
    <div class="widget">
      <div class={"c100 p" + stripValue + " center"}>
        <span>{value}</span>
        <div class="slice">
          <div class="bar"></div>
          <div class="fill"></div>
        </div>
      </div>
      <p className="widget__title">{title}</p>
    </div>
  );
}
