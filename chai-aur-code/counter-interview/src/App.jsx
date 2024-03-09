import { useState } from "react";

function App() {
  const [count, setCount] = useState(15);

  const increaseCount = () => {
    setCount(count + 1); // 16
    setCount(count + 1); // 17
    setCount(count + 1); // 18
    setCount(count + 1); // 19
    setCount(count + 1); // 20
    // we expect 20 on one click, but we get 16 only, this is because react handles tasks in single batch
  };
  const decreaseCount = () => {
    // to actually make all the steps effective
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className=" font-sans bg-black w-screen h-screen flex justify-center items-center flex-col gap-5 ">
      <h1 className="text-white text-6xl font-bold">Counter</h1>

      <p className="text-white ">
        <span className="text-lg font-semibold">Count: </span>
        <span className="text-3xl font-bold">{count}</span>
      </p>
      <button
        className="bg-white text-black text-sm rounded-lg py-2 px-4
      "
        onClick={increaseCount}
      >
        Increase Value by
        <span className="font-bold"> 1</span>
      </button>
      <button
        className="bg-white text-black text-sm rounded-lg py-2 px-4
        "
        onClick={decreaseCount}
      >
        Decrease Value by
        <span className="font-bold">5</span>
      </button>
    </div>
  );
}

export default App;
