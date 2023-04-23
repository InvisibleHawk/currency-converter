import { useEffect, useState } from 'react'
import tableStyle from '../../ui/table.module.scss'
import { useListCurrency } from '../../store/store'
import { Currency, getHistoryCurrency } from '../../network/currencyAPI'

function diffInPercent(current: number, previous: number): string {
  const result = ((current - previous) / previous) * 100
  return previous ? `${result.toFixed(2)} %` : '-'
}

export const HistoryList = () => {
  const currencyA = useListCurrency((state) => state.currencyA)
  const currencyB = useListCurrency((state) => state.currencyB)

  const [historyList, setHistoryList] = useState<Array<Currency>>([])

  useEffect(() => {
    getHistoryCurrency(currencyA, currencyB).then((data) => {
      setHistoryList(data)
    })
  }, [currencyA, currencyB])

  return (
    <div>
      <div className={tableStyle.table}>
        <div className={tableStyle.row}>
          <div className={tableStyle.cell}>Дата</div>
          <div className={tableStyle.cell}>{currencyB}</div>
          <div className={tableStyle.cell}>%</div>
        </div>
        {historyList.map((todayCurrency, day, history) => {
          const dayAgoCurrency = history[day + 1]

          if (!dayAgoCurrency) return

          const todayVal = todayCurrency[currencyB]
          const dayAgoVal = dayAgoCurrency[currencyB]
          const diff = diffInPercent(todayVal, dayAgoVal)

          return (
            <div key={todayCurrency.date} className={tableStyle.row}>
              <div className={tableStyle.cell}>{todayCurrency.date}</div>
              <div className={tableStyle.cell}>{todayVal}</div>
              <div className={tableStyle.cell}>
                <span
                  style={{
                    color: diff.startsWith('-') ? 'red' : 'yellowgreen',
                  }}
                >
                  {diff}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
