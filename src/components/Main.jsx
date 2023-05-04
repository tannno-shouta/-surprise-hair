import styles from 'src/components/Main.module.css'
import { FirstView } from 'src/components/FirstView'
import { Concept } from 'src/components/Concept';


const Main = (props) => {
  return (
      <main className= {styles.main}>
        <FirstView/>
        <Concept/>
      </main>
  );
}

export { Main };