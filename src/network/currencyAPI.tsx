const currencyURL = (date: string, endpoint: string) => `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${endpoint}.json`

const endpoint = async (date: string, currencyA: string, currencyB: string) => {
  const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${currencyA}/${currencyB}.json`)
  const resJson = await res.json()
  return resJson
}

export const getListCurrency = async () => {
    try {
      const res = await fetch(currencyURL('latest', 'usd'))
      if(!res.ok) throw new Error('Failed to fetch')
      const list = await res.json()
      return list
    } catch(error) {
        console.log(error)
        return null
    }
}

export const getHistoryCurrency = (valA: string, valB: string) => {
  const dates = Array.from({ length: 11 }).map((_, i) => {
    const nextDay = new Date()
    nextDay.setDate(new Date().getDate() - i - 1)
    nextDay.setMonth(new Date().getMonth() + 1)
    const year = nextDay.getFullYear()
    const month = nextDay.getMonth().toString().padStart(2, '0')
    const day = nextDay.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  })
  return Promise.all(dates.map(date => endpoint(date, valA, valB)))
}
