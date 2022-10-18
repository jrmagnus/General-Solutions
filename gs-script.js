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
        if (pqtt > 9999) {
            pqtt = 9999
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
    var macadrs = document.getElementById("txtmac").value
    if ( macadrs.length < 12 || macadrs.length > 17 ) {
        alert("Macadress wrong length, input like, '01 23 45 67 89 0A' or '01234567890A'") 
    } else {
        //seletc separator icon
        var macspacer = document.getElementsByName('raddiv')
        var spcr = ''
        if ( macspacer[0].checked ) {
            var spcr = ':'
        } else if ( macspacer[1].checked ) {
            var spcr = '-'
        } else if ( macspacer[2].checked ) {
            var spcr = '.'
        }
        
        //format
        macadrs = macadrs.toUpperCase()

		// check if is hex
		if (macadrs.match(/[G-Z]/g)) {
			alert("This isn't a valid input");
		}

        macadrs = macadrs.replace(/\W/ig, '')
        macadrs = macadrs.replace(/(.{2})/g, "$1" + spcr)
        macadrs= macadrs.slice(0, -1)
        document.getElementById("txtmac").value = macadrs
		
        //copy to clipboard
        var copyText = document.getElementById("txtmac");
        copyText.select();
        document.execCommand("copy")
    }

}
function cidcalc() {
    //to calculate CIDR of networks ex. 10.0.0.1/30 is 10.0.0.0-10.0.0.4
}