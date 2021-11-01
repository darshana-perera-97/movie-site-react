import React from "react";
import { colors } from "../../../DataStore";

export default function ShopLogo() {
  return (
    <div>
      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          fontFamily: "Signika Negative",
          color:colors.clr1,
          border:"2px solid white",
          padding:"0 10px",
          borderRadius:" 10px 0px"
        }}
      >
        Nalaka Stores
      </p>
    </div>
  );
}
