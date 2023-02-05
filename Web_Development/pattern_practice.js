function pattern1(n){
for(let i=0;i<=n;i+=1){
    let str="";
    for(let j=0;j<=n;j++){
        str+="#";
    }
    console.log(str);
}
}

function pattern2(n){
    for(let i=0;i<=n;i+=1){
        let str="";
        for(let j=0;j<i+1;j++){
            str+="#";
        }
        console.log(str);
    }
    }

    function pattern3(n){        
        for(let i=1;i<=n;i+=1){
            let spaces=n-i;
        
            let str="";
            for(let j=0;j<=spaces;j++){  
                str+=" ";
             }


            /*
          
              *               row --1          (2*row-1)starts
             ***              row --2          (2*row-1)starts
            *****             row --3          (2*row-1)starts
           *******            row --4          (2*row-1)starts
          *********           row --5          (2*row-1)starts
           
          */
            let stars=2*i-1;
            for(let j=0;j<stars;j++){  
               str+="*";
            }
            console.log(str);
        }
        }   




function upperTriangle(n){
    for(let i=1;i<=n;i+=1){
        let spaces=n-i;
        let str="";
        for(let j=0;j<=spaces;j++){  
            str+=" ";
         }
        let stars=2*i-1;
        for(let j=0;j<stars;j++){  
           str+="*";
        }
        console.log(str);
      }
    }

function lowerTriangle(n){
    for(let i=1;i<n;i+=1){
        let spaces=i;
        let str="";
        for(let j=0;j<=spaces;j++){  
            str+=" ";
         }
        let stars=2*(n-i)-1;
        for(let j=0;j<stars;j++){  
           str+="*";
        }
        console.log(str);
}
}

function diamond(n){
upperTriangle(n);
lowerTriangle(n);
}



diamond(5);

