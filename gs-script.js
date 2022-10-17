//to Password Gerenation
function genpsw() {    
    //clear textbox
    document.getElementById("txtgenpsw").value = ''
    var psw = document.getElementById('txtgenpsw').value
    var res = document.getElementById('res')
    res.innerHTML = ''

    //get info
    var pqtt = document.getElementById('pqtt').value
    var chars = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
    var pswlen = (document.getElementById('plen').value - 1)

    //create password
    if (pqtt > 1) {
        if (pqtt > 99999) {
            pqtt = 99999
            document.getElementById('pqtt').value = pqtt
            alert(`Max passwords that can be created is ${pqtt}`)
        }
        pqtt--
        for(var i = 0; i <= pqtt; i++) {
            var psw1 = ''
            for (var j = 0; j <= pswlen; j++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                psw1 += chars.substring(randomNumber, randomNumber +1);
            }
            //create an ordered list
            let item = document.createElement('li')
            item.innerText = psw1
            res.appendChild(item)
            }
    } else {
        for (var i = 0; i <= pswlen; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            psw += chars.substring(randomNumber, randomNumber +1);
           }
    }

    //copy to clipboard
    document.getElementById("txtgenpsw").value = psw
    var copyText = document.getElementById("txtgenpsw");
    copyText.select();
    document.execCommand("copy");
}

function macadrs() {
    //to change MacAddress format to ex. AB:CD:EF:01:23:45
}
function cidcalc() {
    //to calculate CIDR of networks ex. 10.0.0.1/30 is 10.0.0.0-10.0.0.4
}