import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Counter</h3>
      <button onClick={() => dispatch(increment())}>count is {counter}</button>
    </>
  );
};

export default Counter;
