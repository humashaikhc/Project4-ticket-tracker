import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

return (
    <div className="counter">
      <h3 className="counter__header">Tickets</h3>
      <div className="counter__button-container">
      <button
          className="counter__button--decrement"
          onClick={handleDecrement}> -
        </button>
        <h5 className="counter__tracker">{counter}</h5>
        <button
          className="counter__button--increment"
          onClick={handleIncrement}> +
        </button>
      </div>
    </div>
  );
};
export default Counter;