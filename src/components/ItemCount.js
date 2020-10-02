import React from "react";

const ItemCount = ({ setCounter, counter, min, max }) => {
  return (
    <div className="d-flex">
      <button
        onClick={() => setCounter(counter - 1)}
        type="submit"
        disabled={counter <= min}
        className="btn btn-outline-secondary font-weight-bold"
      >
        -
      </button>
      <div className="p-2 font-weight-bold">{counter}</div>
      <button
        onClick={() => setCounter(counter + 1)}
        type="submit"
        disabled={counter >= max}
        className="btn btn-outline-secondary font-weight-bold"
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
