import { useState, useRef } from 'react';
import {ProgressCircle} from '../progressCircle/ProgressCircle';

export const Poromodo = ({mins=25}) => {
  const period = 1*5;//mins*25
  const [timer, setTimer] = useState(period);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () =>{
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(()=>{
      setTimer((timer) => {
        if(timer === 0) clearInterval(countRef.current) ;
        return timer - 1;
      })
    }, 1000)
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () =>{
    setIsPaused(true);
    countRef.current = setInterval(() =>{
      setTimer((timer) => {
        if(timer === 0) clearInterval(countRef.current);
        return timer - 1;
      });
    }, 1000)
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(period);
  }
  const getPercentageArchived = () => {
    return (timer/period)*100;
  }
  const formatTime = () => {
    if(timer <= 0) return "Done!!!";

    const getSeconds = `0${(timer % 60)}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return ` ${getMinutes} : ${getSeconds}`;
  }
  return(
    <div>
      <div className="app">
      <div className='stopwatch-card'>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
      {getPercentageArchived()}
    </div>
      <ProgressCircle
        color={"orange"}
        percentage={getPercentageArchived()}
        remainingTime={formatTime()}
      />
    </div>
  )
};
