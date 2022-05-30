import './App.css';
import React, { useState } from "react";
import colorData from "./color-data.json";
// import StarRating from './StarRating';
import ColorList from './ColorList';

export default function App() {
  const [colors, setColors] = useState(colorData);

  const onRateColor = (id, rating) => {
    const newColors = colors.map(color =>
      color.id === id ? {...color, rating} : color);
      setColors(newColors);
  };

  return <ColorList colors={colors} onRemoveColor={id => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  }}
  onRateColor={onRateColor}
  />;
}