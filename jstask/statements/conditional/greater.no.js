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