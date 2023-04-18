import { useRef, useState } from "react"
import { Tag } from "../../ui/Tag"
import { useListCurrency } from "../../store/store"


const arrAmounts: Array<number> = [1, 5, 10, 25, 50, 100, 500, 1000, 5000]

export const PricesList = () => {
  const currency = useListCurrency(state => state.currencyA)
  const [currentAmountTag, setCurrentAmountTag] = useState<number>(1)
  const amountTagRef = useRef<any>(null)
  
  function handleClick(e) {
    setCurrentAmountTag(+e.target.innerText)
  }



  return (
    <div>
         <div style={{display: 'flex', flexFlow: 'wrap'}}>
          {arrAmounts.map((item, i) =>(
            <Tag key={i} ref={amountTagRef} onClick={handleClick}>{item}</Tag>
          ))}
        </div>
        <div>
            <ul>
                {arrAmounts[0]}
            </ul>
        </div>
    </div>
  )
}
