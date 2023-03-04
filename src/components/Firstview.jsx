import styles from 'src/components/Main.module.css'

export function Firstview (props) {
  return (
      <div className= {styles.firstview}>
        <div className= {styles.firstview_image} >
          <img src='src/img/main_view.jpg' alt ="メイン"></img>
        </div>
      </div>
  );
}

export default Firstview;