import styles from 'src/components/Main.module.css'

export function Firstview (props) {
  return (
      <div className= {styles.firstview}>
        <div className= {styles.firstview_image} data-image=""></div>
      </div>
  );
}

export default Firstview;