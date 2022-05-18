import './App.css';
import React, { useState } from "react";
import colorData from "./color-data.json";
// import StarRating from './StarRating';
import ColorList from './ColorList';


export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}