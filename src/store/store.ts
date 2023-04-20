import { create } from 'zustand'


interface ListCurrencyStore {
    optionList: Array<string> | [],
    exchangeRates: null | any,
    currencyA: string,
    amountA: number,
    currencyB: string,
    amountB: number,
    setExchangeRates: (val: object) => void
    setOptionList: (list: Array<string>) => void
    setCurrencyA: (val: string) => void
    setCurrencyB: (val: string) => void
    setAmountA: (val: number) => void
    setAmountB: (val: number) => void
}


export const useListCurrency = create<ListCurrencyStore>((set, get) => ({
    optionList: [],
    currencyA: 'usd',
    currencyB: 'rub',
    exchangeRates: null,
    amountA: 0,
    amountB: 0,
    setExchangeRates: (val) => set({ exchangeRates: val}),
    setOptionList: (list) => set({ optionList: Object.keys(list)}), 
    setCurrencyA: (val) => set({ currencyA: val }),
    setCurrencyB: (val) => set({ currencyB: val }),
    setAmountA: (val) => set({ amountA: val }),
    setAmountB: (val) => set({ amountB: val })
}))