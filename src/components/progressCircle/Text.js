export const Text = ({remainingTime, fontSize="1.5em"}) => {
  return(
    <text
      x ="50%" // Align the text center***
      y ="50%" //*** 
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={fontSize}
    >
      {remainingTime}
    </text>
  )
}