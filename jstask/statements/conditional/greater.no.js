 //find out the greater number//
let a = 16;
let b = 20;
let c = 15;
let d = 26;
let e = 30;
 let greaternumber;
 
 if(a > b){
    if(a > c){
        if(a > d){
            if(a > e){
                greaternumber = a;
            } else {
                greaternumber = e;
            }
        } else{
            if( d > e){
                greaternumber = d;
            }else{
                greaternumber = e;
            }
        }
    } else{
        if(c > d){
            if(c > e){
                greaternumber = c;
            }
        }else{
            if(d > e){
                greaternumber = d;
            }else{
                greaternumber = e;
            }
        }
    }
 }else{
    if(b > c){
        if(b > d){
            if(b >e){
                greaternnumber = b;
            }else{
                greaternumber = e;
            }
        } else {
            if(d>e){
                greaternumber = d;
            } else {
                greaternumber = e;
            }
        }
    }else{
        if (c>d){
            if(c > e){
                greaternumber = c;
            }else{
                greaternumber = e;
            }
        }else{
            if(d > e){
                graternumber = d;
            }else{
                greaternumber = e;
            }
        }
    }
 }

 console.log("the greater number is :" + greaternumber);
 //switch case //
 console.log("____switch case____")
 let bestfriend = 4;
 let name;
 switch(bestfriend){
     case 1:
         name = "sejal";
         break;
         case 2:
         name = "kamna";
         break;
         case 3:
         name = "rahina";
         break;
         case 4:
         name = "pranay";
         break;
         case 5:
         name = "sakshi";
         break;
         case 6:
         name = "krish";
         break;
         case 7 :
         name = "umesh";
         break;
 }
 console.log("your best friend  name is " + name);
 
 
 
 