import React from 'react'
import { Button } from '../Button'
import styles from './Section.module.scss'

interface ISectionProps {
  children?: React.ReactNode
  closable?: boolean
  isClose?: boolean
  onClose?: () => void | null
  title?: string
}

export const Section: React.FC<ISectionProps> = ({
  closable = true,
  isClose = false,
  onClose,
  title,
  children,
}) => {
  if (isClose) return null

  return (
    <div className={styles.section}>
      <div className={styles.sectionPanel}>
        <div>
          <h3>{title}</h3>
        </div>
        {closable && (
          <div>
            <Button onClick={onClose}>❌</Button>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}
