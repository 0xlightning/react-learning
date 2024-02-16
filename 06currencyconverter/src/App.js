import { useState } from "react";
import {InputBox} from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState()
  const [from, setfrom] = useState('usd')
  const [to, setto] = useState('inr')
  const [convertedAmount, setconvertedAmount] = useState()

  const CurrencyInfo =  useCurrencyInfo(from)
  const options =  Object.keys(CurrencyInfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedAmount(0);
    setAmount(0);
  }

  const convert = () => {
    setconvertedAmount(amount * CurrencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
    style={{backgroundImage: 'url(https://wallpapercave.com/wp/wp2288163.jpg)'}}>
      
      <div className="w-auto mb-1">
      <h1 className="bg-blue-800 text-blue-50 flex justify-center">Currency Converter</h1>
        <div className="w-full max-m-wd border mx-auto 
         rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{e.preventDefault()
             convert()}}>
            <div className="w-full mb-1">
              <InputBox
               label="from"
               amount={amount}
               currencyOptions={options}
               onCurrencyChange={(currency)=> setfrom(currency)}
               onAmountChange={(amount)=> setAmount(amount)}
               selectedCurrency={from}
               />
            </div>
            <div className="realtive w-full h-0.5">
              <button className="absolute border-2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 border-blue-400
               text-white rounded-md p-1 bg-red-900"
               onClick={swap}>Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox
               label="to"
               amount={convertedAmount}
               currencyOptions={options}
               onCurrencyChange={(currency1)=> setto(currency1)}
               selectedCurrency={to}
               amountDisabled
               />
            </div>
            <button type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
