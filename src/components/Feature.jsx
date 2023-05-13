import styles from 'src/components/Feature.module.css';

const Feature  = (props) =>{
  return (
      <div className= {styles.feature} >
        <div className= {styles.feature_main_body} >
          <div className= {styles.feature_image} >
            <img src='/img/feature1.jpg' alt ="コンセプト" width="320px" height=  "480px"></img>
          </div>
          <div className= {styles.feature_body} >
            <span className={styles.feature_title}>技術</span>
            <p className={styles.feature_text}>伸びても気にならないグラデーション</p>
            <p className={styles.feature_text}>カラー、骨格にあわせたカット&パーマなど</p>
            <p className={styles.feature_text}>時間が経っても綺麗に素敵でいられる</p>
            <p className={styles.feature_text}>再現性の高い技術にこだわっています。</p>
          </div>
        </div>
        <div className= {styles.feature_main_body} >
          <div className= {styles.feature_body} >
            <span className={styles.feature_title}>空間</span>
            <p className={styles.feature_text}>席と席の間隔を広くとり、周りを気にせず</p>
            <p className={styles.feature_text}>プライベートな空間でリラックスできます。</p>
            <p className={styles.feature_text}>シャンプースペースも思わず眠ってしまう</p>
            <p className={styles.feature_text}>空間で癒しのひと時をお過ごしください</p>
          </div>
          <div className= {styles.feature_image} >
            <img src='/img/feature2.jpg' alt ="コンセプト" width="320px" height=  "480px"></img>
          </div>
        </div>
        <div className= {styles.feature_main_body} >
          <div className= {styles.feature_image} >
            <img src='/img/feature3.jpg' alt ="コンセプト" width="320px" height=  "480px"></img>
          </div>
          <div className= {styles.feature_body} >
            <span className={styles.facility_title}>シャンプー台</span>
            <p className={styles.feature_text}>まるでベッドのようなシャンプー台</p>
            <p className={styles.feature_text}>ヘッドクッションにより首の負担がありません</p>
            <p className={styles.feature_text}>まさに「夢心地」の時間を過ごしていただけます</p>
          </div>
        </div>
        <div className= {styles.feature_main_body} >
          <div className= {styles.feature_body} >
            <span className={styles.treatment_title}>トリートメント</span>
            <p className={styles.feature_text}>お客様に合わせたオーダーメイドトリートメント</p>
            <p className={styles.feature_text}>髪につける高濃度高濃度オーガニック美容液で</p>
            <p className={styles.feature_text}>ヘッドスパで日々のストレスや心身のトラブルを</p>
            <p className={styles.feature_text}>ほぐす癒しのひと時を提供します。</p>
          </div>
          <div className= {styles.feature_image} >
            <img src='/img/feature4.jpg' alt ="コンセプト" width="320px" height=  "480px"></img>
          </div>
        </div>
    </div>
  );
}

export { Feature };