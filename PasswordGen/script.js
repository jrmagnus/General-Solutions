function genpass() {
    //to Password Gerenation
    document.getElementById("txtgenpass").value = ''
    let psw = document.getElementById('txtgenpass').value
    var chars = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
    var pswlen = (document.getElementById('plen').value - 1)
    
    //create password
    for (var i = 0; i <= pswlen; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        psw += chars.substring(randomNumber, randomNumber +1);
       }

    document.getElementById("txtgenpass").value = psw
    var copyText = document.getElementById("txtgenpass");
    copyText.select();
    document.execCommand("copy"); 
}
/*
function copy() {
    var copyText = document.getElementById("txtgenpass");
    copyText.select();
    document.execCommand("copy");  
  }
  */