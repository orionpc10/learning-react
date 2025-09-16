import React, { useId } from 'react'

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={`bg-white p-4 rounded-lg text-sm flex justify-between items-center shadow-md ${className}`}>
      {/* Amount Input */}
      <div className="w-1/2 flex flex-col">
        <label htmlFor={id} className="text-gray-500 text-xs mb-1">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300"
          placeholder="amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Select */}
      <div className="w-1/2 flex flex-col items-end">
        <label className="text-gray-500 text-xs mb-1">Currency Type</label>
        <select
          className="rounded-md px-3 py-2 bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
          value={selectedCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Inputbox
