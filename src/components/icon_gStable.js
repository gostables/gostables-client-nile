import React from "react";
import { getCurrency } from "../utils/currencies";

const StableIcon = (props) => {
  const { height = 16, noTitle = false, currencyKey } = props;
  let curr = getCurrency(currencyKey);
  return (
    <>
      <span className="">
        <img
          src={curr.icon}
          alt={curr.label}
          width={height}
          height={height}
          className="rounded-circle flex-shrink-0"
        />
      </span>
      <span className="mx-1">{noTitle ? "" : curr.label}</span>
    </>
  );
};

export default StableIcon;
