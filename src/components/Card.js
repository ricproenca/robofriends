import React from "react";

const Card = ({ name, email }) => {
  const url = `https://robohash.org/${name}?size=200x200`;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={url} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
