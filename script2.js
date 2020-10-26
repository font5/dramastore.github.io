function changingCode() {
    var ujumbe1 = document.getElementById('ujumbe')
    var checking = ujumbe1.style.display
    if (checking == 'block') {
        ujumbe1.style.display = 'none'
    }
}






function closePop() {
    let displayMessage = document.getElementById('display-download')
    let overlay = document.getElementById('overlay')
    overlay.style.display = 'none'
    displayMessage.style.display = 'none'
}



var tarehe = new Date();
var mwaka = tarehe.getFullYear()
var mwezi = tarehe.getMonth() + 1
var leo = tarehe.getDate()
var saa = tarehe.getHours()
var dakika = tarehe.getMinutes()
var sekunde = tarehe.getSeconds()


document.getElementById('yaLeo').innerHTML = leo + "/"+ mwezi + "/" + mwaka
