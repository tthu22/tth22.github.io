let category = document.querySelectorAll(".category");//lấy tất cả các elemt có class là category 

let dropAll = function (drop){
    let content = document.querySelectorAll(drop);  // trả về 1 node list 
    content.forEach((element)=>{
        element.style.display="none"; // duyệt qua từng phần tử của nodelist  
        element.parentElement.querySelector('i').setAttribute('class',"fa-solid fa-plus");// chọn các phần tử i cho thêm vào đó class 
    })
}

let dropdown = function (e) {
    let btn = e.target.closest('.button');//lấy ra phần tử gần phần ử có class là .button
    if (btn) {
        let icon = btn.querySelector(".fa-plus");
        let content = btn.parentElement.querySelector('.sentencesHiden');//từ vị chí của btn lấy cha nó từ cha tím phẩn tử có class là .sentencesHiden
        console.log(icon)// nếu tím thấy phần tử có class là fa plus thí set class là fa -minus and show data
        if(icon){
            dropAll('.sentencesHiden')
            content.setAttribute('style','display:block');
            icon.setAttribute('class',"fa-solid fa-minus")
        }
        else{//nếu không có phần tử là fa plus thì ẩn đi nè đổi tên thành fa flus
            content.setAttribute('style','display:none');
            icon = btn.querySelector(".fa-minus");
            icon.setAttribute('class',"fa-solid fa-plus")
        }
    }
}
category.forEach((element) => {// khi cick vào thì chạy function dropdown
    element.onclick = dropdown;
})

