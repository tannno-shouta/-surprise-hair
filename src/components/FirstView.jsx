import styles from 'src/components/FirstView.module.css'

const FirstView  = (props) =>{
  return (
      <div className= {styles.firstview} >
        <div className= {styles.firstview_image} >
          <img src='/img/main_view.jpg' alt ="メイン" width="1080px"
  height=  "720px"></img>
        </div>
      </div>
  );
}

export { FirstView };