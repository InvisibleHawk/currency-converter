import styles from './Tag.module.scss'
import { forwardRef } from 'react'

interface ITag {
  children: React.ReactNode
  ref: any
}

export const Tag: React.FC<ITag> = forwardRef(({children, ...props}, ref) => {
  return (
    <button className={styles.tag} ref={ref} {...props}>
        {children}
    </button>
  )
})
