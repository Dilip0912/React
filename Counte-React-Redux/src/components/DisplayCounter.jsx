import { useSelector } from "react-redux"

const DisplayCounter = function () {
  const currentCounter=useSelector((store)=>store.counter)
  return (
    <p className="lead mb-4">
      Counter Value is:{currentCounter}
    </p>
  );
};

export default DisplayCounter;
