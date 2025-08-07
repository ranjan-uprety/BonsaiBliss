//function to add items to cart list in all pages except product description
function additem(a) {
    var list=document.getElementById('cartlist');
    var img=a.parentElement.children[0].children[1];
    var title=a.parentElement.children[0].children[2];
    var price=a.parentElement.children[0].children[3];
    //adding a <li> element on <ul> to add to cart list
    list.innerHTML+="<li><button class='closeitem' onclick='closeitem(this)'><i class='icon-cancel'></i></button><div class='cart-list'><div class='list-left'><img src='"+img.getAttribute('src')+"'><div class='list-desc'><h3>"+title.innerHTML+"</h3><h4>"+price.innerHTML+"</h4></div></div><div class='quantity'><button onclick='substractquantity(this)'>-</button><input type='numbers' value='1'><button onclick='addquantity(this)''>+</button></div></div></li>";
}
//function to add items to cart list in product description
function additemagain(a) {
    var list=document.getElementById('cartlist');
    var img=a.parentElement.parentElement.children[0].children[0];
    var title="Cedar"
    var price=a.parentElement.children[3].children[1];
    var quan=a.parentElement.children[5].children[1];
    //adding a <li> element on <ul> to add to cart list
    list.innerHTML+="<li><button class='closeitem' onclick='closeitem(this)'><i class='icon-cancel'></i></button><div class='cart-list'><div class='list-left'><img src='"+img.getAttribute('src')+"'><div class='list-desc'><h3>"+title+"</h3><h4>"+price.innerHTML+"</h4></div></div><div class='quantity'><button onclick='substractquantity(this)'>-</button><input type='numbers' value='"+quan.value+"'><button onclick='addquantity(this)''>+</button></div></div></li>";
}
//function to remove item from cart
function closeitem(a) {
    var list1=a.parentElement;
    list1.parentNode.removeChild(list1)
}
//function to increase quantity of item in cart
function addquantity(a) {
    var quantity=a.parentElement;
    var input=parseInt(quantity.children[1].value);
    var newinput=input+1;
    quantity.children[1].value=newinput;
}
//function to decreast quantity of item in cart
function substractquantity(a) {
    var quantity=a.parentElement;
    var input=parseInt(quantity.children[1].value);
    if (input>1) {
    var newinput=input-1;
    quantity.children[1].value=newinput;
    }
}
//function to show proper message on clicking purchase button on sidebar cart
function purchase() {
    var cart=document.getElementById('cartlist');
    if(cart.innerHTML=="") {
        popup("Error!", "No items were found in your cart!");
    }
    else {
        popup("Items Purchased!", "Your items will be delivered shortly after!")
        cart.innerHTML="";
    }
}