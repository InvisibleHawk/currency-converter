import React, { ChangeEventHandler, FormEvent } from 'react'
import styles from './Input.module.scss'

interface IInputProps {
    value: number | string,
    type?: string
}

export const Input: React.FC<IInputProps> = ({type = 'string', ...props}) => {
  return (
    <input 
      className={styles.input}
      type={type}
      min={0}
      onScroll={(e: FormEvent<HTMLInputElement>) => e.preventDefault()}
      {...props}
    />
  )
}
