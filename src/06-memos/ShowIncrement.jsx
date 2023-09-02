import React from "react";
// eslint-disable-next-line react/prop-types
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a generar :(");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.displayName = 'ShowIncrement'