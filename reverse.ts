function reverse(x: number): number {
   const isNegative = x < 0;
   let absStr = Math.abs(x).toString();
   let result = Number(absStr.split('').reverse().join(''));
   if(result > 2147483647){
    return 0
   }

   return isNegative ? -result : result;
};
