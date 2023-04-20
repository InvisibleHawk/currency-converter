import { Button } from '../Button'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Button>💲 Список</Button>
        <Button>📈 Курс</Button>
    </div>
  )
}
