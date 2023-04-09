import styles from 'src/components/Main.module.css'
import { Firstview } from 'src/components/Heroview'


const Main = (props) => {
  return (
      <main className= {styles.main}>
        <Firstview/>
      </main>
  );
}

export { Main };