var arrImagen = []

function addImg(){

    var image = document.getElementById('pDocument')

    var objProduct = new Object();
    objProduct.image = "galeria/" + image;

    arrImagen.push(objProduct);

    setProducts()
}

function setProducts(){

    var divImg = document.getElementById('divImg')
    divImg.innerHTML = ""

    for(var i = 0; i < arrImagen.length; i ++){
        var img = document.createElement("img")


        img.setAttribute('src', arrImagen[i].image)


        divImg.appendChild(img);
    }

    var modal = document.getElementById("myModal")
    modal.style.display= "none"

}
