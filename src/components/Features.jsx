import styles from 'src/components/Features.module.css';
import { Feature } from 'src/components/Feature';

const Features  = (props) =>{
  return (
      <div className= {styles.Features} >
        <div className= {styles.Features_body} >
          <span className= {styles.Features_title}>Features</span>
        </div>
        <Feature/>
      </div>
  );
}

export { Features };