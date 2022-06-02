import React, { useContext } from "react";
import { ColorContext } from "./";
import Color from "./Color";

export default function ColorList() {
  const { colors } = useContext(ColorContext);

  if(!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {
       colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
} 