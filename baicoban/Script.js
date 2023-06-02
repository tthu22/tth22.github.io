
// alert("hello world");
// var height=165;
// var weight=50;
// var BMI= 50/165^2;
// let name="thanh thu";
// console.log("BMI="+ BMI);
// function Check( height)
// {
//     if(height%2==0)
//     {
//     console.log("số chẵn")
//     }
//     console.log("số lẻ")

// }
// Check(165);
// var month=2;
// function checkQuy(month)
// {
//     if(month<=3) console.log("quý 1");
//     else if (month>3&&month<=6) console.log("quý 2");
//     else if(month>6&&month<=9) console.log("quý 3");
//     else if(month>9 &&month<=12) console.log("quý 4");
//     else console.log("không phải tháng");
// }
// checkQuy(month);
// function checkBMI(height, weight)
// {
//     var BMI= weight/height*height;
//     if(BMI<18.5)
//     console.log ("bạn gầy")
//     else if(BMI>25)
//     console.log("bạn béo")
//     else("bạn cân đối")

// }
// checkBMI(height,weight);
// var diemHK1=8;
// var diemHK2=9;
// var diemYear=10;
//  function math(diemHK1,diemHK2,diemYear)
// {
//     var diem= (diemHK1+diemHK2*2+diemYear*3)/6;
//     if(diem>8)
//     console.log("giỏi");
//     else if(diem<8&&diem>=6.5)
//     console.log("khá");
//     else
//     console.log("trung bình");
    

// }
// math(diemHK1,diemHK2,diemYear);
// var day=1
// var month=1
// var year=2022
// var h=0;

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// if(leapyear(2022))
// {
//     h=366*24;
// }
// else

// h=365*24;
// let arr=[1,2,10,0,9,5];
// for(var i=0;i<arr.length-1;i++)
// {
//     for(var j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             tg=arr[i];
//             arr[i]=arr[j];
//             arr[j]=tg;
//         }
//     }
// }
// arr.sort();
// arr.sort(function(a,b)
// {
//     if(a>b)
//     return 1;
//      if(a<b)
//     return -1;
//      return 0;
// });
// var maxInArr=Math.max.apply(Math,arr);
// console.log(maxInArr);
// console.log(arr);
//  let arrBanKinh=[10,20,30];
 
//  let arrDienTich = arrBanKinh.map(function(banKinh) {
//     return Math.floor(Math.PI * banKinh * banKinh);
// });
//  console.log(arrDienTich);

// let copy = arrBanKinh.map(function(bankinh)
// {
//     return bankinh;
// })
// console.log(copy) 

// const animals = [
//     {
//         "name": "cat",
//         "size": "small",
//         "weight": 5
//     },
//     {
//         "name": "dog",
//         "size": "small",
//         "weight": 10
//     },
//     {
//         "name": "lion",
//         "size": "medium",
//         "weight": 150
//     },
//     {
//         "name": "elephant",
//         "size": "big",
//         "weight": 5000
//     }
// ]

// let animal_names = animals.map((animal) => {
//     return animal.name
// })
// let hihi = animals.map(function(animal)
// {
//     return animal.name
// })
// console.log(animal_names);
// console.log(hihi);
// //nhận giá trị true false
// let small_animals = animals.filter((animal) => {
//     return animal.size === "small"
// })
// console.log(small_animals);
// let total_weight= animals.reduce((weight,animal,index,animals)=>
// {
//     return weight+=animal.weight;
// },0)
// console.log(total_weight);
// let a=["a","b",""];
// var obj= a.reduce((a,cur,i)=>{
    
//     i=cur;
//     a[i]=cur;
//     return a;
// }, {})
// console.log(obj);
// let c={ id:1,name:"an",age:19}
// let array= Object.values(c);
// console.log(array);
function btnDangKiClick()
{
    document.getElementById("resten").innerHTML=document.getElementById("inputTen").value;
    document.getElementById("resngaysinh").innerHTML=document.getElementById("inputngay").value;
    const radioButtons=document.querySelectorAll('input[name="gioitinh"]');
    let selectedGender;
    for(const radioButton of radioButtons)
    {
        if(radioButton.checked)
        {
            selectedGender = radioButton.value;
            break;
        }
    }
    document.getElementById("resgt").innerHTML=selectedGender?`${selectedGender}`:"chọn đi"
}