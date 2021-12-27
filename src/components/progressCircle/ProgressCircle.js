import { Circle } from "./Circle"
import { Text } from "./Text"

export const ProgressCircle = ({color, percentage, remainingTime}) =>{
  const percent = percentage >= 100 ? 100: percentage;
  return(
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color="lightgrey" />
        <Circle color={color} percentage={percent} />
      </g>
      <Text remainingTime={remainingTime} fontSize={"1.8rem"}/>
    </svg>
  )
}