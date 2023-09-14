import React, { useEffect } from 'react';
import { useState } from 'react';
import DisplayComponent from './components/Display';
import ButtonComponent  from './components/Button';
import styles from './styles/App.module.css';


function App() {
  const [time, setTime] = useState({
    ms: 0, 
    ss: 0, 
    mm: 0, 
    hh: 0
  });
  const [timerID, setTimerID] = useState();
  const [isRunning, setIsRunning] = useState(false)
  const [status, setStatus] = useState(0);
  //Not Started = 0
  //Started = 1
  //Pause = 2

  useEffect(() => {
    if (isRunning) {
      run();
      setTimerID(setInterval(run, 10));
    }
    else {
      clearInterval(timerID);
    }
  }, [isRunning]) // eslint-disable-line

  const clickStart = () => {
    setStatus(1);
    setIsRunning(true);
  }

  const run = () => {
    if (!isRunning) return 0;

    return setTime((prev) => {
      let newTime = {...prev} 
      
      if(newTime.mm === 60) {
        newTime.hh++;
        newTime.mm = 0;
      }
  
      if(newTime.ss === 60) {
        newTime.mm++;
        newTime.ss = 0;
      }
  
      if(newTime.ms === 100) {
        newTime.ss++;
        newTime.ms = 0;
      }
  
      newTime.ms++;

      return newTime;
    });
  }

  const clickWait = () => {
    setIsRunning(false);
    setStatus(2)
  }

  const clickStop = () => {
    setIsRunning(false);
    setStatus(0);

    setTime({
      ms: 0, 
      ss: 0, 
      mm: 0, 
      hh: 0
    });
  }

  const clickReset = () => {
    setStatus(1);
    setIsRunning(true);
    setTime({
      ms: 0, 
      ss: 0, 
      mm: 0, 
      hh: 0
    });

  }

  const clickResume = () => {
    setIsRunning(true)
    setStatus(1);
  }

  return (
    <div className={styles.main_section}>
      <div className={styles.clock_holder}>
        <div className={styles.stopwatch}>
          <DisplayComponent time={time}/>
          <ButtonComponent clickStart={clickStart} 
                          clickStop={clickStop} 
                          clickWait={clickWait} 
                          clickReset={clickReset} 
                          clickResume={clickResume}
                          status={status}/>
        </div>
      </div>
    </div>
  );
}

export default App;
