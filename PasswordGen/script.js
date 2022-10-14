//to Password Gerenation
function genpass() {    
    //clear textbox
    document.getElementById("txtgenpass").value = ''
    var psw = document.getElementById('txtgenpass').value
    var res = document.getElementById('res')
    
    //get info
    var pqtt = document.getElementById('pqtt').value
    var chars = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
    var pswlen = (document.getElementById('plen').value - 1)
    
    //create password
    for (var i = 0; i <= pswlen; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        psw += chars.substring(randomNumber, randomNumber +1);
       }

    //copy to clipboard
    document.getElementById("txtgenpass").value = psw
    var copyText = document.getElementById("txtgenpass");
    copyText.select();
    document.execCommand("copy");

    //for more than 1 password
    if (pqtt > 1) {
        var morepss = document.createElement('div')
        res.appendChild(morepss)
        alert(`creating ${pqtt} passwords!`)
        for(var i = 0; i <= pqtt; i++) {
            for (var j = 0; j <= pswlen; j++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                psw += chars.substring(randomNumber, randomNumber +1);
               }
            morepss.appendChild(psw)
        }
    }
}