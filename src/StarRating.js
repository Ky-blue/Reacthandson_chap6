import React, { useState } from "react";
import { Star } from "./Star";

export default function StarRating({ selectedStars = 3, totalStars = 5 }) {
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}