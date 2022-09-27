let countEle = document.getElementById("count-ele")
// console.log(countEle)
let count = 0
function increment(){
    count+=1
    countEle.innerText= count
}
function savefun(){
   console.log(count)
   document.getElementById("save").textContent+=count+" - "
   countEle.innerText= 0
   count=0

}