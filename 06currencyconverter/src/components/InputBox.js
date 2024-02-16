import { useId } from "react"

function InputBox({
    label,
    amount,
    onCurrencyChange,
    onAmountChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    CurrencyDisabled = false,
}) {
    const id = useId()
  return (
    <div className='flex bg-white rounded-lg text-sm p-3'>
        <div className='w-1-2'>
            <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
              id={id}
              className='outline-none w-full bg-transparent py-1.5'
              type="number" 
              placeholder='Amount'
              disabled={amountDisabled}
              value={amount}
              onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1-2 flex flex-wrap justify-end text-right'>
            <p className='mb-2 text-black/40 w-full'>
                Currency Type
            </p>
            <select
             className='rounded-lg bg-gray-100 cursor-pointer outline-none p-1'
             value={selectedCurrency}
             onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
             disabled={CurrencyDisabled}
             >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox