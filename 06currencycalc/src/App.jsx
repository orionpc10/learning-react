import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { Inputbox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyData[to])
  }

  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
          className="flex flex-col gap-4"
        >
          {/* From input */}
          <Inputbox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />

          {/* Swap Button */}
          <div className="relative flex justify-center -my-2">
            <button
              type="button"
              className="swap-button"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To input */}
          <Inputbox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
          />

          {/* Convert button */}
          <button type="submit" className="convert-button">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
