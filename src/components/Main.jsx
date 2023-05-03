import styles from 'src/components/Main.module.css'
import { FirstView } from 'src/components/FirstView'


const Main = (props) => {
  return (
      <main className= {styles.main}>
        <FirstView/>
      </main>
  );
}

export { Main };