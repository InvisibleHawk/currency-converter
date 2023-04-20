import React, { useState } from 'react'
import { Button } from '../Button'
import styles from './Section.module.scss'

interface ISectionProps {
    children?: React.ReactNode
    isClosed?: boolean,
    title?: string
}

export const Section: React.FC<ISectionProps> = ({ isClosed = true, title, children}) => {
  const [isClose, setClose] = useState<boolean>(false)
  
  const close = () => setClose(!isClose)

  return (
    <div className={styles.section} style={{display: isClose ? 'none' : 'block'}}>
        <div className={styles.sectionPanel}>
          <div>
            <h3>{title}</h3>
          </div>
        {isClosed && 
          <div>
            <Button onClick={close}>❌</Button>
          </div>
        }
        </div>
      {children}
    </div>
  )
}
