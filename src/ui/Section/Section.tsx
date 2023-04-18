import React, { useState } from "react"
import { Button } from "../Button"
import styles from "./Section.module.scss"

interface ISectionProps {
    children?: React.ReactNode
    isClosed?: boolean
}

export const Section: React.FC<ISectionProps> = ({ isClosed = true, children}) => {
  const [isClose, setClose] = useState<boolean>(false)
  
  const close = () => setClose(!isClose)

  return (
    <div className={styles.box} style={{display: isClose ? 'none' : 'block'}}>
      {isClosed && 
        <div className={styles.closePanel}>
          <Button onClick={close}>❌</Button>
        </div>
      }
      {children}
    </div>
  )
}
