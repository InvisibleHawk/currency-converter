import { Select } from '../../ui/Select'
import { Input } from '../../ui/Input'

interface ICurrencyRow {
    options: Array<string>,
    selectedOption: string,
    onChangeCurrency: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    onChangeAmount: (event: number) => void
    amount: number | string
}

export const CurrencyRow: React.FC<ICurrencyRow> = ({ options, selectedOption, amount = 0, onChangeCurrency, onChangeAmount}) => {

  return (
    <div>
        <Input type='number' value={amount} onChange={(e) => onChangeAmount(e.target.value)} />
        <Select value={selectedOption} values={options} onChange={onChangeCurrency} />
    </div>
  )
}
