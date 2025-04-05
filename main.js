let path = "test2.pdf"
var page = 1
function showpage(){

    var viewer = document.createElement("embed")

    viewer.src = path + "#toolbar=0&view=Fit&scrollbar=0&page=" + page.toString()
    viewer.type = "application/pdf"
    viewer.className = "fileview"

    document.querySelector(".fileview").remove()
    document.querySelector(".embed_wrap").appendChild(viewer)
}

function pagescroll(next){
    document.querySelector(".embed_wrap").scrollBy(0,next ? window.innerHeight:-window.innerHeight)
}

document.querySelector(".prev").addEventListener("click",function(){
    pagescroll(false)
})

document.querySelector(".next").addEventListener("click",function(){
    pagescroll(true)
})

document.querySelector(".file").addEventListener("input",function(){
    path = document.querySelector(".file").value
    showpage()
})
