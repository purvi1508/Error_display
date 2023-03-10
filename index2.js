let eroorParagraph = document.getElementById("error")
console.log(eroorParagraph)

function purchase(){
    console.log("button clicked")
    eroorParagraph.textContent="Something went wrong, Please try again"
}