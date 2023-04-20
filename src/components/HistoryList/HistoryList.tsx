import { useEffect, useState } from 'react'
import tableStyle from '../../ui/table.module.scss'
import { useListCurrency } from '../../store/store'
import { getHistoryCurrency } from '../../network/currencyAPI'

function toPrecent(current: number, previos: number): string {
    const result = ((current - previos) / previos) * 100
    return previos ? `${result.toFixed(2)} %` : '-'
}

export const HistoryList = () => {
    const currencyA = useListCurrency((state) => state.currencyA)
    const currencyB = useListCurrency((state) => state.currencyB)

    const [historyList, setHistoryList] = useState<Array<any>>([])

    useEffect(() => {
        getHistoryCurrency(currencyA, currencyB)
            .then((data) => {       
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
            {historyList.map((item, i, arr) => {
                if(!arr[i + 1]) return
                let previous: number = arr[i + 1][currencyB]
                return (
                <div key={item.date} className={tableStyle.row}>
                    <div className={tableStyle.cell}>
                        {item.date}
                    </div>
                    <div className={tableStyle.cell}>
                        {item[currencyB]}
                    </div>
                    <div className={tableStyle.cell}>
                        <span style={{
                            color: (arr[i][currencyB] - previous) > 0 
                            ? 'yellowgreen' 
                            : 'red'}}
                        >
                            {toPrecent(arr[i][currencyB], previous)}
                        </span>
                    </div>
                </div>
            )})}
        </div>
    </div>
  )
}
