// Code your solution in this file!
function distanceFromHqInBlocks(value){
   let dest = 42;
   let diff;
   diff = Math.abs(value - dest);
   return diff;
 }

 function distanceFromHqInFeet(value){
   distanceFromHqInBlocks(value);
   const convert = 264;
   return distanceFromHqInBlocks(value) * convert;

}
function distanceTravelledInFeet(start, dest){
   const convert = 264 ;
   const distance = Math.abs(dest-start);
   return  distance * convert;

}

function calculatesFarePrice(start, dest){
   distanceTravelledInFeet(start, dest);
   let price;
   let set = 25;
   if (distanceTravelledInFeet(start,dest)<= 400){
       return price = 0;
   }else if (distanceTravelledInFeet(start,dest) > 400 && distanceTravelledInFeet(start,dest) <= 2000){
      return price = (2/100 * (distanceTravelledInFeet(start,dest)-400));
   }else if(distanceTravelledInFeet(start,dest) > 2000 && distanceTravelledInFeet(start,dest)<2500){
      return set;

   }else{
      return "cannot travel that far";
   }

}

 

