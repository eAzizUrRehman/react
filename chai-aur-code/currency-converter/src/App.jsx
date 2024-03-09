import React, { useState } from "react";
import InputBox from "./components/InputBox";

import useCurrencyInfo from "./hooks/useCurrencyInfo";

import bgImg from "./assets/bg-img.jpg";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from, to);

  const options = Object.keys(currencyInfo);

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className="flex-center h-screen  w-full flex-wrap bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
    >
      <div className="w-full">
        <div className="border-gray-60 mx-auto w-full max-w-md rounded-lg border bg-white/30 p-5 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-1 w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative h-0.5 w-full">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 text-white"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="mb-4 mt-1 w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={from}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
