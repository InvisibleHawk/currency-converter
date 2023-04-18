import { CurrencyRow } from '../CurrencyRow'
import { useListCurrency } from '../../store/store'
import styles from './ConvertPair.module.scss'
import { useEffect, useState } from 'react'



export const ConvertPair = () => {
  const { optionList, exchangeRates, currencyA, currencyB, setCurrencyA, setCurrencyB } = useListCurrency()
  const [amount, setAmount] = useState(1)
  const [rate, setRate] = useState<number>(0)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let amountA: number, amountB: number

  if(amountInFromCurrency) {
    amountA = amount
    amountB = (amount / exchangeRates[currencyA]) * exchangeRates[currencyB]
  } else {
    amountB = amount
    amountA = (amount * exchangeRates[currencyA]) / exchangeRates[currencyB]
  }

  function handleAmountA(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleAmountB(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
 
  useEffect(() => {
    setRate(exchangeRates[currencyA])
    console.log(rate)
  })

  return (
    <div className={styles.container}>
        <CurrencyRow
          onChangeCurrency={(e) => setCurrencyA(e.target.value)}
          onChangeAmount={handleAmountA}
          selectedOption={currencyA}
          options={optionList}
          amount={amountA} 
        />
        <CurrencyRow
          onChangeCurrency={(e) => setCurrencyB(e.target.value)}
          onChangeAmount={handleAmountB}
          selectedOption={currencyB} 
          options={optionList}
          amount={amountB}
        />
    </div>
       
  )
}
