function reverse(x: number): number {
    if(x < 0){
         x = -x
 let st = Array.from(x.toString()).map(Number);
     let result = Number(st.reverse().join(''));
     if( result > 2147483647  || result < -2147483648){
         return 0;
     }
     return -result;
     }
   let st = Array.from(x.toString()).map(Number);
     let result = Number(st.reverse().join(''));
      if(result > 2147483647 || result< -2147483648){
         return 0;
     }
   return result;
        
 };