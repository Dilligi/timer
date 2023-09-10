import React from 'react';
import styles from '../styles/button.module.css'

function ButtonComponent({clickStart, clickStop, clickReset, clickWait, clickResume, status}) {
  return (
    <div>
      {status === 0
        ? <button className={`${styles.stopwatch_btn} ${styles.stopwatch_btn_gre}`} onClick={clickStart}>Start</button> 
        : ''
      }

      { status === 1 
        ? (
          <>
            <button className={`${styles.stopwatch_btn} ${styles.stopwatch_btn_red}`} onClick={clickStop}>Stop</button>
            <button className={`${styles.stopwatch_btn} ${styles.stopwatch_btn_blu}`} onDoubleClick={clickWait}>Wait</button>
            <button className={`${styles.stopwatch_btn} ${styles.stopwatch_btn_yel}`} onClick={clickReset}>Reset</button>  
          </>
        )
        :''
      }

      {status === 2 
        ? (
          <>
            <button className={`${styles.stopwatch_btn} ${styles.stopwatch_btn_gre}`} onClick={clickResume}>Resume</button>
            <button className={`${styles.stopwatch_btn} ${styles.stopwatch_btn_yel}`} onClick={clickReset}>Reset</button>  
          </>
        )
        :''
      }
    </div>
  );
}

export default ButtonComponent;
