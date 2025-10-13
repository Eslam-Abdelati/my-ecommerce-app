import React from "react";

function Badge(props) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-1 py-1 px-4 rounded-full text-[11px] capitalize 
    ${props.status === "pending" && "bg-[rgba(255,82,82,0.1)] text-primary "}
    ${props.status === "confirm" && "bg-green-50 text-green-600 "}
    ${props.status === "delivered" && "bg-green-700 text-white "}
    `}
    >
      {props.status}
    </span>
  );
}

export default Badge;
