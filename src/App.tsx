import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useListCurrency } from './store/store'
import { useStateSections } from './store/store'
import { shallow } from 'zustand/shallow'
import { getExchangeRate } from './network/currencyAPI'
import { Section } from './ui/Section'
import { ConvertPair } from './components/ConvertPair'
import { PricesList } from './components/PricesList'
import { HistoryList } from './components/HistoryList/'
import { Navbar } from './components/Navbar'
import styles from './App.module.scss'

function App() {
  const setOptionList = useListCurrency((state) => state.setOptionList)
  const setExchangeRates = useListCurrency((state) => state.setExchangeRates)

  const {
    isSectionPrices,
    isSectionHistory,
    setSectionPrice,
    setSectionHistory,
  } = useStateSections(
    (state) => ({
      isSectionPrices: state.isSectionPrices,
      isSectionHistory: state.isSectionHistory,
      setSectionPrice: state.setSectionPrice,
      setSectionHistory: state.setSectionHistory,
    }),
    shallow
  )

  useEffect(() => {
    getExchangeRate().then((data) => {
      if (data) {
        setOptionList(Object.keys(data.usd))
        setExchangeRates(data.usd)
      }
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      {createPortal(<Navbar />, document.body)}
      <Section title="Конвертация валют" isClosed={false}>
        <ConvertPair />
      </Section>
      <Section
        isClose={isSectionPrices}
        onClose={setSectionPrice}
        title="Список стоимостей"
      >
        <PricesList />
      </Section>
      <Section
        isClose={isSectionHistory}
        onClose={setSectionHistory}
        title="История курса конвертации"
      >
        <HistoryList />
      </Section>
    </div>
  )
}

export default App
