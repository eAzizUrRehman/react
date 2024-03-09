import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  classes = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`flex rounded-lg bg-white p-3 text-sm ${classes} `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="mb-2 inline-block text-black/40"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent py-1.5 outline-none"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex-end-start  w-1/2 flex-wrap text-right">
        <p className="mb-2 w-full text-black/40">Currency Type</p>
        <select
          className="cursor-pointer rounded-lg bg-gray-100 px-1 py-1 outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
