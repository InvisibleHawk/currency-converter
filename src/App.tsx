import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useListCurrency } from './store/store'
import { getListCurrency } from './network/currencyAPI'
import { Section } from './ui/Section'
import { ConvertPair } from './components/ConvertPair'
import { PricesList } from './components/PricesList'
import { HistoryList } from './components/HistoryList/HistoryList'
import { Navbar } from './ui/Navbar'
import styles from './App.module.scss'


function App() {
  const setOptionList = useListCurrency((state) => state.setOptionList)
  const setExchangeRates = useListCurrency((state) => state.setExchangeRates)

  useEffect(() => {
    getListCurrency()
      .then(data => {
        setOptionList(data.usd)
        setExchangeRates(data.usd)
      })
      
  }, [])

  return (
    <div className={styles.wrapper}>
      {createPortal(<Navbar />, document.body)}
      <Section title='Конвертация валют' isClosed={false}>
        <ConvertPair />
      </Section>
      <Section title='Список стоимостей'>
        <PricesList />
      </Section>
      <Section title='История курса конвертации'>
          <HistoryList />
      </Section>
    </div>
  )
}

export default App
