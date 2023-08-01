document.getElementById("p-button").addEventListener("click", function() {
    document.getElementById("p-div").style.display = "block";
    document.getElementById("img-div").style.display = "none";
    document.getElementById("p-div").innerHTML+="<p style=\"background-color:black; color:white\">Hot chocolate is delicious</p>"
})
document.getElementById("img-button").addEventListener("click", function() {
    document.getElementById("img-div").style.display = "block";
    document.getElementById("p-div").style.display = "none";
    document.getElementById("img-div").innerHTML+="<img src=\"hotchocolate.jpg\"></img>"
})