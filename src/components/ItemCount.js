import React from "react";
import { Button, Input } from "react-bootstrap";

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
      {/* <input type="number">{counter} </input> */}
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
