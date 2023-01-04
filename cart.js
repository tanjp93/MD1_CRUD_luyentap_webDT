const btn = document.querySelectorAll("button")
// console.log("btn>>>")
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector(".product-item div span").innerText
        // console.log(productPrice,productImg,productName);
        addcart(productPrice, productImg, productName)
    })
})

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var carItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < carItem.length; i++) {
        var productT=document.querySelectorAll(".title")
        // console.log(productT)
        if (productT[i].innerHTML===productName){
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = `<tr>
                        <td style="display: flex; align-items: center" ><img style="width:10rem" src="` + productImg + `" alt=""><span class="title">`+ productName + `</span></td>
                        <td><span class="price">` + productPrice + `</span><sup>đ</sup></td>
                        <td><input style="width: 2rem;outline: none;text-align: center" type="number" value="1" min="1"></td>
                        <td style="cursor: pointer">Xóa</td>
                    </tr>`
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}

/*---------totalPrice----------*/

function cartTotal() {
    var carItem = document.querySelectorAll("tbody tr");
    var totalC = 0;
    // console.log(carItem.length)
    for (let i = 0; i < carItem.length; i++) {
        var inputValue = carItem[i].querySelector("input").value;
        var productPrice = carItem[i].querySelector("span.price").innerHTML;
        console.log(productPrice)
        var totalA = inputValue * productPrice * 1000;
        // var totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA;
        // var totalD = totalC.toLocaleString('de-DE')
        // console.log(totalD)
        // console.log(totalC)
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice=document.querySelector(".cart-icon span")
    cartTotalA.innerHTML=totalC.toLocaleString('de-DE')
    cartPrice.innerHTML=totalC.toLocaleString('de-DE')

    inputChange()
}

function deleteCart() {
    var carItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < carItem.length; i++) {
        var productT = document.querySelectorAll("tbody tr td:last-child")
        productT[i].addEventListener("click",function (event) {
            var cartDelete=event.target
            var carItems=cartDelete.parentElement
            // console.log(carItems)
            carItems.remove()
            cartTotal()
        })
    }
}
function inputChange() {
    var carItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < carItem.length; i++) {
        var inputValue = carItem[i].querySelector("td input")
        inputValue.addEventListener("change",function () {
            cartTotal()
        })
    }
}
const  cartbtn=document.querySelector(".fa-x")
const cartshow=document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click",function () {
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function () {
    document.querySelector(".cart").style.right="-100%"
})