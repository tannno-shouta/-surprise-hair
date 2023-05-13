import styles from 'src/components/Main.module.css'
import { FirstView } from 'src/components/FirstView'
import { Concept } from 'src/components/Concept';
import { Features } from 'src/components/Features';

const Main = (props) => {
  return (
      <main className= {styles.main}>
        <FirstView/>
        <Concept/>
        <Features/>
      </main>
  );
}

export { Main };