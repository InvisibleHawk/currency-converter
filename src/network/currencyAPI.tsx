const currencyURL = (date: string, endpoint: string) => `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${endpoint}.json`


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
