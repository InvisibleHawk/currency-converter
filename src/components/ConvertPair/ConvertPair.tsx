import { CurrencyRow } from '../CurrencyRow'
import { useListCurrency } from '../../store/store'
import styles from './ConvertPair.module.scss'
import { useMemo, useState } from 'react'



export const ConvertPair = () => {
  const { optionList, exchangeRates, currencyA, currencyB, setCurrencyA, setCurrencyB} = useListCurrency()
  const [amount, setAmount] = useState(1)

  const [amountInA, setAmountInA] = useState<boolean>(true)

  const [valA, valB] = useMemo(() => {
    if(exchangeRates === null) return [0, 0]
    return (
      amountInA
        ? [amount, ((amount / exchangeRates[currencyA]) * exchangeRates[currencyB]).toFixed(2)]
        : [((amount * exchangeRates[currencyA]) / exchangeRates[currencyB]).toFixed(2), amount]

    )
  }, [amount, amountInA, exchangeRates, currencyA, currencyB])


  function handleAmountA(e) {
    setAmount(e.target.value)
    setAmountInA(true)
  }

  function handleAmountB(e) {
    setAmount(e.target.value)
    setAmountInA(false)
  }

  return (
    <div className={styles.container}>
        <div>
          <h2></h2>
        </div>
        <CurrencyRow
          onChangeCurrency={(e) => setCurrencyA(e.target.value)}
          onChangeAmount={handleAmountA}
          selectedOption={currencyA}
          options={optionList}
          amount={valA} 
        />
        <CurrencyRow
          onChangeCurrency={(e) => setCurrencyB(e.target.value)}
          onChangeAmount={handleAmountB}
          selectedOption={currencyB} 
          options={optionList}
          amount={valB}
        />
    </div>
  )
}
