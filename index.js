const washBtn=document.getElementById("wash-btn")
const mowBtn=document.getElementById("mow-btn")
const pullBtn=document.getElementById("pull-btn")
const totalText=document.getElementById("total-amount")
const sendBtn=document.getElementById("send-btn")
const priceTable=document.getElementById("price-cart")
let priceList=[]
let total=0
let isWashClicked=false
let isMowClicked=false
let isPullClicked=false


function renderTotal(isClicked,price){
    if (isClicked==false){
        total+=price
    }
    totalText.textContent=total
}

function renderCart(isClicked,text,price){
    if(isClicked==false){
        let listItem=
        `<tr>
            <th class="left-side">${text}</th>
            <th class="right-side">${price}</th>
        </tr>`
        priceList.push(listItem)
        priceTable.innerHTML=priceList
    }
}


washBtn.addEventListener('click', function(){
    renderTotal(isWashClicked,10)
    renderCart(isWashClicked,"Wash Car","$10")
    isWashClicked=true
})

mowBtn.addEventListener('click', function(){
    renderTotal(isMowClicked,20)
    renderCart(isMowClicked,"Mow Lawn","$20")
    isMowClicked=true
})

pullBtn.addEventListener('click', function(){
    renderTotal(isPullClicked,30)
    renderCart(isPullClicked,"Pull Weeds","$30")
    isPullClicked=true
})

sendBtn.addEventListener('click', function(){
    isMowClicked=false
    isPullClicked=false
    isWashClicked=false
    total=0
    totalText.textContent=total
    priceList=[]
    priceTable.innerHTML=priceList
})


