import { Select } from "../../ui/Select"
import { Input } from "../../ui/Input"

interface ICurrencyRow {
    options: Array<string>,
    selectedOption: string,
    onChangeCurrency: (event: any) => any,
    onChangeAmount: (event: any) => any
    amount: number
}

export const CurrencyRow: React.FC<ICurrencyRow> = ({ options, selectedOption, amount, onChangeCurrency, onChangeAmount}) => {

  console.log(selectedOption)
  return (
    <div>
        <Input value={amount} onChange={onChangeAmount} />
        <Select value={selectedOption} values={options} onChange={onChangeCurrency} />
    </div>
  )
}
