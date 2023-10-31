// Examples of function

// 1. return number is odd or even    
        // input : number
        // output : true / false

        function myFunction1(num1) {
            if(num1 % 2 === 0){
                return true;
            } else {
                return false;
            }
        }
        myFunction1();
        
        const result1 = myFunction1(10);
        
        console.log(result1);
        
        // *********
        function myFunction2(num2) {
            if(num2 % 2 === 0){
                return true;
            } 
            return false;
        }
        myFunction2();
        
        const result2 = myFunction1(11);
        
        console.log(result2);
        
        
        // **********
        function myFunction3(num3) {
            return num3 % 2 === 0;
        }
        myFunction3();
        
        const result3 = myFunction3(100);
        
        console.log(result3);
        
        // 2. Write second character of string
            // input : string
            // output : second character
        
        function firstChar(anyString){
            return anyString[1];
        }
        console.log(firstChar("ADESH"));
        
        
        // 3. Write target index numer in array
        
        const array1 = [1,2,3,4,5,6,7,8,9,10];
        
        function findTarget(array,target){
            for(let i = 0; i < array.length; i++){
                if(array[i] === target){
                    return i;
                }
            }
            return -1;
        }
        findTarget(array1,8);
        
        const ans = findTarget(array1,8);
        
        console.log(ans);