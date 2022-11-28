//btn like 
let likes=document.getElementsByClassName("like");
console.log(likes)

for (let i=0 ; i<likes.length ; i++){
  let like=likes[i];
 like.addEventListener("click" , function(){
if (like.firstChild.style.color == "black"){
  like.firstChild.style.color = "red";
}
else{
  like.firstChild.style.color = "black";
}
  
});
}

//btnplus

let btnplus=document.getElementsByClassName("plus-btn");
for (let i=0 ; i<btnplus.length ; i++){
  let oneplus=btnplus[i]
  oneplus.addEventListener("click", function(){
oneplus.previousElementSibling.value++
total();
total1();
 total2();
  total3();
});

}
//btnminus

let minus=document.getElementsByClassName("minus-btn");
for (let i=0 ; i<minus.length ; i++ ){
  let oneminus= minus[i];
  oneminus.addEventListener("click", function(){
    if( oneminus.nextElementSibling.value>1 ){
      oneminus.nextElementSibling.value--;
      total();
      total1();
       total2();
        total3();
    }
  });
}
//delete 

let deletes=document.getElementsByClassName("delete");
for (let i=0 ; i<deletes.length ; i++ ){
  let deleteone=deletes[i];
  deleteone.addEventListener("click",function(){
    deleteone.parentElement.remove();
 
  })
  
}
 
//btntotal

let items=document.getElementsByClassName("item");
let totalprice=document.getElementById("total-price")
function total(){
let s=0;
  for ( let i=0 ; i<items.length; i++){
    let item=items[i];
    s=s+queryselector(".quant").value*item.queryselector("price").innertext;

  }
  return(totalprice.value = s);
}
  function total1(){
  let q1=document.getElementById("q1");
  let p1=document.getElementById("p1");
  p1.innerText = q1.value * 1379
}
function total2(){
  let q2=document.getElementById("q2");
  let p2=document.getElementById("p2");
  p2.innerText = q2.value * 176
}
function total3(){
  let q3=document.getElementById("q3");
  let p3=document.getElementById("p3");
  p3.innerText = q3.value * 249
} 




