import classNames from "classnames"
import styles from "./Button.module.scss"

type BtnType = 'default' | 'info'

interface IButtonProps {
    children: React.ReactNode
    type?: BtnType
    onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({children, type = 'default', ...props}) => {
  return (
    <button
        {...props}
        className={classNames({
            [`${styles.info}`]: type === 'info',
            [`${styles.default}`]: type === 'default'
        })}
    >
        {children}
    </button>
  )
}
