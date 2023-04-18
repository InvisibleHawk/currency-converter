import styles from './Layout.module.scss'
import { ConvertPair } from '../components/ConvertPair'
import { Section } from '../ui/Section'
import { PricesList } from '../components/PricesList'


export const Layout: React.FC = () => {
  
  return (
    <div className={styles.wrapper}>
      <Section isClosed={false}>
        <ConvertPair />
      </Section>
      <Section>
        <PricesList />
      </Section>
    </div>
  )
}
