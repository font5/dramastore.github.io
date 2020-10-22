function checkCode() {
    var input = document.getElementById('input').value;

    if (input == 1666) {
        let tale = document.getElementById('tale');
        tale.style.display = 'block'; 
    }
    else if (input == 1667) {
            let tale = document.getElementById('spies');
            tale.style.display = 'block';     
    }
    else if (input == 1668) {
        let tale = document.getElementById('private');
        tale.style.display = 'block';
}
else if (input == 1669) {
    let tale = document.getElementById('dodo');
    tale.style.display = 'block';
}
    else {
        let ujumbe = document.getElementById('ujumbe')
        ujumbe.innerHTML = "Wrong Code! Try Again! <br>"
    }
}






function closeButton() {
    window.location.reload();
}



var tarehe = new Date();
var mwaka = tarehe.getFullYear()
var mwezi = tarehe.getMonth() + 1
var leo = tarehe.getDate()
var saa = tarehe.getHours()
var dakika = tarehe.getMinutes()
var sekunde = tarehe.getSeconds()


document.getElementById('yaLeo').innerHTML = leo + "/"+ mwezi + "/" + mwaka