import { useEffect } from "react"
import { Layout } from "./layout"
import { useListCurrency } from "./store/store"
import { getListCurrency } from "./network/currencyAPI"


function App() {
  const { setOptionList, setCurrencyA, setCurrencyB, setExchangeRates } = useListCurrency()

  useEffect(() => {
    getListCurrency()
      .then(data => {
        const currencyKey = Object.keys(data.usd)
        setOptionList(data.usd)
        setExchangeRates(data.usd)
        setCurrencyA('usd')
        setCurrencyB('rub')
      })
      
  }, [])

  return <Layout />
}

export default App
