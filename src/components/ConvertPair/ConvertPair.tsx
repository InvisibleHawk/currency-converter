import { CurrencyRow } from '../CurrencyRow'
import { useListCurrency } from '../../store/store'
import styles from './ConvertPair.module.scss'
import { useMemo, useState } from 'react'

export const ConvertPair = () => {
  const {
    optionList,
    exchangeRates,
    currencyA,
    currencyB,
    setCurrencyA,
    setCurrencyB,
  } = useListCurrency()
  const [amount, setAmount] = useState<number>(1)
  const [isAmountInA, setIsAmountInA] = useState<boolean>(true)

  const [valA, valB] = useMemo(() => {
    if (exchangeRates === null) return [0, 0]
    return isAmountInA
      ? [
          amount,
          (
            (amount / exchangeRates[currencyA]) *
            exchangeRates[currencyB]
          ).toFixed(2),
        ]
      : [
          (
            (amount * exchangeRates[currencyA]) /
            exchangeRates[currencyB]
          ).toFixed(2),
          amount,
        ]
  }, [amount, isAmountInA, exchangeRates, currencyA, currencyB])

  function handleAmountA(val: number) {
    setAmount(val)
    setIsAmountInA(true)
  }

  function handleAmountB(val: number) {
    setAmount(val)
    setIsAmountInA(false)
  }

  return (
    <div className={styles.container}>
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
