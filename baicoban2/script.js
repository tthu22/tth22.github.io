// var value1= document.getElementById("value1");
// var value2= document.getElementById("value2"); 
// var pheptinh=document.getElementsByClassName("btn");
// var res= document.getElementById("result");
// console.log(pheptinh);

function myFunction(elem) {
    var value1= document.getElementById("iput1").value;
    var value2= document.getElementById("iput2").value;
    var res=0;
    switch(elem.id)
    {
        case "btn1":
            {
                res= value1*1+value2*1;
                break;
            }
        case "btn2":
            {
                res= value1-value2;
                break;
            }
        case "btn3":
            {
                res=value1*value2;
                break;
            }
        case "btn4":
        {
            res= value1/value2;
            break;
        }
    }
    document.getElementById("result").innerHTML=res;
}