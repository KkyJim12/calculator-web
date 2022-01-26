import { useState } from "react";

const App = () => {
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  const operators = ["+", "-", "*", "/"];

  const [result, setResult] = useState([]);

  const pressNumber = (value) => {
    setResult([...result, value]);
  };

  const pressOperator = (value) => {
    if (operators.includes(result[result.length - 1])) {
      setResult([...result.slice(0, result.length - 1), value]);
    } else {
      setResult([...result, value]);
    }
  };

  const reset = () => {
    setResult([]);
  };

  const getResult = () => {
    setResult(eval(result.join("")));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
        <h1 className="mb-10 text-4xl">Calculator</h1>
        <div className="flex flex-col w-4/5 p-5 space-y-5 bg-gray-200 shadow-lg lg:w-2/5 h-4/6">
          <div id="screen" className="flex items-center justify-end h-20 overflow-hidden text-right text-yellow-500 bg-black">
            <h2 className="text-4xl">{result}</h2>
          </div>
          <div
            id="typing"
            className="grid h-full grid-cols-3 bg-gray-400 bg-opacity-30"
          >
            <div id="numpad" className="h-full col-span-2">
              <div className="grid h-full grid-cols-3 gap-1 p-1 lg:p-3 lg:gap-3 ">
                {numbers.map((number, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        pressNumber(number);
                      }}
                      className="flex items-center justify-center col-span-1 bg-white rounded shadow-md cursor-pointer number hover:bg-opacity-30"
                    >
                      <span className="text-md lg:text-4xl">{number}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="operator" className="col-span-1">
              <div className="grid h-full grid-cols-2 gap-1 p-1 lg:p-3 lg:gap-3">
                {operators.map((operator, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => pressOperator(operator)}
                      className="flex items-center justify-center col-span-1 bg-white rounded shadow-md cursor-pointer hover:bg-opacity-30"
                    >
                      <span className="text-md lg:text-4xl">{operator}</span>
                    </div>
                  );
                })}
                <div
                  onClick={() => reset()}
                  className="flex items-center justify-center col-span-2 bg-white rounded shadow-md cursor-pointer hover:bg-opacity-30"
                >
                  <span className="text-md lg:text-4xl">Reset</span>
                </div>
                <div
                  onClick={() => getResult()}
                  className="flex items-center justify-center col-span-2 bg-white rounded shadow-md cursor-pointer hover:bg-opacity-30"
                >
                  <span className="text-md lg:text-4xl">=</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
