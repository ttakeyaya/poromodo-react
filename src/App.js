import { ProgressCircle } from "./components/progressCircle/ProgressCircle";

export const App = () => {
  return(
    <div>
      <ProgressCircle color={"steelblue"} percentage={25} remainingTime={"25:00"}/>
    </div>
  )
};