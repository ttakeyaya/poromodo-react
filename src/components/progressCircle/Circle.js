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
      strokeWidth="0.5rem" 
      strokeDasharray={circumference} 
      strokeDashoffset={percentage ? strokePercentage : 0}
      ></circle>
  );
};
