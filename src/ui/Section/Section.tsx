import React from 'react'
import { Button } from '../Button'
import styles from './Section.module.scss'

interface ISectionProps {
  children?: React.ReactNode
  isClosed?: boolean
  isClose?: boolean
  onClose?: () => void | null
  title?: string
}

export const Section: React.FC<ISectionProps> = ({
  isClosed = true,
  isClose = false,
  onClose,
  title,
  children,
}) => {
  return (
    <div
      className={styles.section}
      style={{ display: isClose ? 'none' : 'block' }}
    >
      <div className={styles.sectionPanel}>
        <div>
          <h3>{title}</h3>
        </div>
        {isClosed && (
          <div>
            <Button onClick={onClose}>❌</Button>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}
