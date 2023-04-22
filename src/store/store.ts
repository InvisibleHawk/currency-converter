import { create } from 'zustand'

interface ListCurrencyStore {
  optionList: Array<string> | []
  exchangeRates: null | any
  currencyA: string
  currencyB: string
  setExchangeRates: (val: object) => void
  setOptionList: (list: Array<Record<string, number>>) => void
  setCurrencyA: (val: string) => void
  setCurrencyB: (val: string) => void
}

interface SectionsStore {
  isSectionPrices: boolean
  isSectionHistory: boolean
  setSectionPrice: () => void
  setSectionHistory: () => void
}

export const useListCurrency = create<ListCurrencyStore>((set, get) => ({
  optionList: [],
  currencyA: 'usd',
  currencyB: 'rub',
  exchangeRates: null,
  amountA: 0,
  amountB: 0,
  setExchangeRates: (val) => set({ exchangeRates: val }),
  setOptionList: (list) => set({ optionList: Object.keys(list) }),
  setCurrencyA: (val) => set({ currencyA: val }),
  setCurrencyB: (val) => set({ currencyB: val }),
}))

export const useStateSections = create<SectionsStore>((set, get) => ({
  isSectionPrices: false,
  isSectionHistory: false,
  setSectionPrice: () => set({ isSectionPrices: !get().isSectionPrices }),
  setSectionHistory: () => set({ isSectionHistory: !get().isSectionHistory }),
}))
