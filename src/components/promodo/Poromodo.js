import {ProgressCircle} from '../progressCircle/ProgressCircle';


export const Poromodo = ({mins=25}) => {
  return(
    <div>
      <ProgressCircle 
        color={"orange"} 
        percentage={25} 
        remainingTime={mins}
      />
    </div>
  )
};