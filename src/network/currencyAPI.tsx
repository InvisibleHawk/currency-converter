const baseCurrencyURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1'

const exchangeRateURL = (date: string, endpoint: string) =>
  `${baseCurrencyURL}/${date}/currencies/${endpoint}.json`

const targetCurrencyExchangeRateURL = (
  date: string,
  currencyA: string,
  currencyB: string
) => `${baseCurrencyURL}/${date}/currencies/${currencyA}/${currencyB}.json`

export type Currency = {
  [key: string]: number
} & { date: string }

export type ExchangeRate = {
  usd: Record<string, number>
  date: string
}

export const getExchangeRate = async (): Promise<ExchangeRate | null> => {
  try {
    const res = await fetch(exchangeRateURL('latest', 'usd'))
    if (!res.ok) throw new Error('Failed to fetch')
    return await res.json()
  } catch (error) {
    console.log(error)
    return null
  }
}

const currenciesDateEndpoint = async (
  date: string,
  currencyA: string,
  currencyB: string
): Promise<Currency> => {
  const res = await fetch(
    targetCurrencyExchangeRateURL(date, currencyA, currencyB)
  )
  return await res.json()
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
  return Promise.all(
    dates.map((date) => currenciesDateEndpoint(date, valA, valB))
  )
}
