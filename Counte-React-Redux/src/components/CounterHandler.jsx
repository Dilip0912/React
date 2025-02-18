import { useRef } from "react";
import { useDispatch } from "react-redux";

const CounterHandler = function () {
  const counterDispatch = useDispatch();
  const inputElement=useRef();

  const handleIncrement = () => {
    counterDispatch({ type: "Increment" });
  };
  const handleDecrement = () => {
    counterDispatch({ type: "Decrement" });
  };

  const handleAdd=()=>{
    counterDispatch({ type: "Add" ,payload:inputElement.current.value});
    inputElement.current.value="";
  }

  const handleSubtract=()=>{
    counterDispatch({ type: "Subtract" ,payload:inputElement.current.value});
    inputElement.current.value="";
  }
  const handleToggle=()=>{
    counterDispatch({type:"Toggle"})
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center counter-row">
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-secondary "
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-secondary "
          onClick={handleToggle}
        >
          Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center counter-row">
        <input
          type="text"
          placeholder="Enter number"
          ref={inputElement}
          className="number-input"
        />
        <button type="button" className="btn btn-secondary " onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-secondary " onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default CounterHandler;
