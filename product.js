// selecting side navbar, menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
    closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search functionality

var productContainer = document.getElementById("product-container")
var search = document.getElementById("Search")
var productlist = productContainer.querySelectorAll("div")

Search.addEventListener("keyup",function(){
    var enteredValued = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
        {
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValued)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})