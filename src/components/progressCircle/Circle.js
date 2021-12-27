export const Circle = ({color, percentage}) =>{
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokePercentage = ((100 - percentage) * circumference)/100;

  return(
    <circle 
      r={radius} 
      cx="100" 
      cy="100" 
      fill="transparent" 
      stroke={strokePercentage !== circumference ? color : ""}
      stroke-width="0.5rem" 
      stroke-dasharray={circumference} 
      stroke-dashoffset={percentage ? strokePercentage : 0}
      ></circle>
  );
};
