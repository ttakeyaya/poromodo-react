export const Text = ({remainingTime}) => {
  return(
    <text
      x ="50%"
      y ="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {remainingTime}
    </text>
  )
}