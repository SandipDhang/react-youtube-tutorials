import React from "react";

const FuncComp = ({ myData, myArr }) => {
  return (
    <>
      <h1>We are learning: {myData}</h1>
      <div>
        {myArr.map((d) => {
          return <p>{d}</p>;
        })}
      </div>
    </>
  );
};

export default FuncComp;
