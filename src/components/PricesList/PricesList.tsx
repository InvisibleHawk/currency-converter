import styles from  './PricesList.module.scss'
import tableStyle from '../../ui/table.module.scss'
import { useListCurrency } from '../../store/store'
import { useMemo } from 'react'


const arrAmounts: Array<number> = [1, 5, 10, 25, 50, 100, 500, 1000, 5000]

export const PricesList = () => {
  const { currencyA, currencyB, exchangeRates } = useListCurrency(state => state)
  const [valA, valB] = useMemo(() => {
    if(exchangeRates === null) return [0, 0]
    return [exchangeRates[currencyA], exchangeRates[currencyB]]
    }, [exchangeRates, currencyA, currencyB])

return (
    <div className={styles.containerList}>
      <div className={tableStyle.table}>
        {arrAmounts.map((amount) => (
                <div key={amount} className={tableStyle.row}>
                    <div className={tableStyle.cell}>
                        <b>{`${amount} ${currencyA.toUpperCase()}`}</b>
                    </div>
                    <div className={tableStyle.cell}>
                        <b>{`${(amount / valA * valB).toFixed(2)} ${currencyB.toUpperCase()}`}</b> 
                    </div>
                </div>
        ))}
      </div>
      <div className={tableStyle.table}>
        {arrAmounts.map((amount) => (
            <div key={amount} className={tableStyle.row}>
                <div className={tableStyle.cell}>
                    <b>{`${amount} ${currencyB.toUpperCase()}`}</b>
                </div>
                <div className={tableStyle.cell}>
                <b>{`${(amount * valA / valB).toFixed(2)} ${currencyA.toUpperCase()}`}</b>
                </div>
            </div>
        ))}
      </div>
    </div>
)
}
