import './App.css';
import React, { useState } from "react";
import colorData from "./color-data.json";
// import StarRating from './StarRating';
import ColorList from './ColorList';
import { v4 } from "uuid";
import AddColorForm from './AddColorForm';

export default function App() {
  const [colors, setColors] = useState(colorData);

  const onRateColor = (id, rating) => {
    const newColors = colors.map(color =>
      color.id === id ? {...color, rating} : color);
      setColors(newColors);
  };

  return (
    <>
      <AddColorForm onNewColor={(title, color)=> {
        const newColors = [
          ...colors,
          {
            id: v4(),
            rating: 0,
            title,
            color
          }
        ];
        setColors(newColors);
      }} />
      <ColorList colors={colors} onRemoveColor={id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
    }}
    onRateColor={onRateColor} />
  </>
  );
}