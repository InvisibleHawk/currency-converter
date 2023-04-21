import styles from './Select.module.scss'

interface ISelectProps {
    value: string
    values: string[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<ISelectProps> = ({value, values, onChange}) => {

  return (
    <select value={value} className={styles.select} onChange={onChange}>
        {values.map((item) => (
          <option key={item} className={styles.option} value={item}>{item}</option>
        ))}
    </select>
  )
}
