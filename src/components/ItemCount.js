import React, { useState } from "react";

const ItemCount = ({ countMaker, min, max }) => {
  const [countItems, setCountItems] = useState(1);

  return (
    <div className="d-flex" onClick={countMaker(countItems)}>
      <button
        onClick={() => setCountItems(countItems - 1)}
        type="submit"
        disabled={countItems <= min}
        className="btn btn-outline-secondary font-weight-bold"
      >
        -
      </button>
      <div className="p-2 font-weight-bold">{countItems}</div>
      <button
        onClick={() => setCountItems(countItems + 1)}
        type="submit"
        disabled={countItems >= max}
        className="btn btn-outline-secondary font-weight-bold"
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
