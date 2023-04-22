import { Button } from '../../ui/Button'
import { useStateSections } from '../../store/store'
import { shallow } from 'zustand/shallow'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const { setSectionPrice, setSectionHistory } = useStateSections(
    (state) => ({
      setSectionPrice: state.setSectionPrice,
      setSectionHistory: state.setSectionHistory,
    }),
    shallow
  )

  return (
    <div className={styles.navbar}>
      <Button onClick={setSectionPrice}>💲 Список</Button>
      <Button onClick={setSectionHistory}>📈 Курс</Button>
    </div>
  )
}
