//to Password Gerenation
function generatepassword() {    
    //clear textbox
    document.getElementById("txtgeneratepassword").value = ''
    var password = document.getElementById('txtgeneratepassword').value
    var passwordlist = document.getElementById('passwordlist')
    passwordlist.innerHTML = ''

    //get info
    var passwordquantity = document.getElementById('passwordquantity').value
    var charsLetters = "abcdefghkmnopqrstuvwxyzABCDEFGHKLMNPQRSTUVWXYZ";
    var charsSpecial = "!@#$%^&*~";
    var charsNumbers = "0123456789";
    var chars = '';
    var passwordlength = (document.getElementById('passwordlength').value - 1)

    const charsLettersCheck = document.getElementById('charsletters');
    if (charsLettersCheck.checked) {
        chars = chars + charsLetters;
    }
    const charsNumbersCheck = document.getElementById('charsnumbers');
    if (charsNumbersCheck.checked) {
        chars = chars + charsNumbers;
    }
    const charsSpecialCheck = document.getElementById('charsspecials');
    if (charsSpecialCheck.checked) {
        chars = chars + charsSpecial;
    }

    //create password
    if (passwordquantity > 1) {
        if (passwordquantity > 9999) {
            passwordquantity = 9999
            document.getElementById('passwordquantity').value = passwordquantity
            alert(`Max passwords that can be created is ${passwordquantity}`)
        }
        passwordquantity--
        for(var i = 0; i <= passwordquantity; i++) {
            var password1 = ''
            for (var j = 0; j <= passwordlength; j++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                password1 += chars.substring(randomNumber, randomNumber +1);
            }
            //create an ordered list
            let item = document.createElement('li')
            item.innerText = password1
            passwordlist.appendChild(item)
            }
    } else {
        for (var i = 0; i <= passwordlength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
           }
    }

    //copy to clipboard
    document.getElementById("txtgeneratepassword").value = password
    var copyText = document.getElementById("txtgeneratepassword");
    copyText.select();
    document.execCommand("copy");
}

function formatmac() {
    //to change MacAddress format to ex. AB:CD:EF:01:23:45
    var macaddress = document.getElementById("txtmac").value
    if ( macaddress.length < 12 || macaddress.length > 17 ) {
        alert("Macadress wrong length, input like, '01 23 45 67 89 0A' or '01234567890A'") ;
    } else {
        //seletc separator icon
        var macspacer = document.getElementsByName('radialicon')
        var spcr = ''
        if ( macspacer[0].checked ) {
            var spcr = ':'
        } else if ( macspacer[1].checked ) {
            var spcr = '-'
        } else if ( macspacer[2].checked ) {
            var spcr = '.'
        }
        
        //format
        macaddress = macaddress.toUpperCase()
        macaddress = macaddress.toUpperCase()
        if (macaddress.match(/[G-Z]/g)) {
			alert("This isn't a valid MAC");
		} else {
			macaddress = macaddress.replace(/\W/ig, '');
			macaddress = macaddress.replace(/(.{2})/g, "$1" + spcr);
			macaddress = macaddress.slice(0, -1);
			document.getElementById("txtmac").value = macaddress;

			//copy to clipboard
			var copyText = document.getElementById("txtmac");
			copyText.select();
			document.execCommand("copy")
		}

        //copy to clipboard
        var copyText = document.getElementById("txtmac");
        copyText.select();
        document.execCommand("copy")
    }

}

function cidrCalculate() {
	var block = document.getElementById("cidrInput").value.split("/"); // block[0] = base address, block[1] = netmask
	var ipAddress = block[0].split('.');
	var netmaskBlocks = ["0","0","0","0"];

	// transform by decimal to binary
	if(!/\d+\.\d+\.\d+\.\d+/.test(block[1])) { // check if the input is long notation or slash notation
		// block[1] has to be between 0 and 32
		netmaskBlocks = ("1".repeat(parseInt(block[1], 10)) + "0".repeat(32 - parseInt(block[1], 10))).match(/.{1,8}/g);
		netmaskBlocks = netmaskBlocks.map(e => parseInt(e, 2));
		var subnetMask = false
	} else {
		// xxx.xxx.xxx.xxx
		netmaskBlocks = block[1].split('.').map(e => parseInt(e, 10));
		var subnetMask = true
	}

	// invert for creating broadcast address (highest address)
	var invertedNetmaskBlocks = netmaskBlocks.map(e => e ^ 255);
	var baseAddress = ipAddress.map((block, idx) => block & netmaskBlocks[idx]);
	var broadcastAddress = baseAddress.map((block, idx) => block | invertedNetmaskBlocks[idx]);

	document.getElementById("ipRange").value = baseAddress.join('.') + '-' + broadcastAddress.join('.');
	console.log(block[1])

	if (block[1] === "32") {
		document.getElementById("DHCPrange").value = baseAddress.join('.');
	}
	else {
		var DHCPbase = baseAddress[0]+'.'+baseAddress[1]+'.'+baseAddress[2]+'.'+(parseInt(baseAddress[3])+1);
		var DHCPhigher = broadcastAddress[0]+'.'+broadcastAddress[1]+'.'+broadcastAddress[2]+'.'+(parseInt(broadcastAddress[3])-1)
		document.getElementById("DHCPrange").value = DHCPbase + '-' + DHCPhigher;
	}
}

function createUsername() {
    let fullName = document.getElementById("fullName").value;
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const surnames = nameParts.slice(1);
    let username = firstName;
  
    for (let i = 0; i < surnames.length; i++) {
      const surname = surnames[i];
      const numCharacters = Math.min(surname.length, Math.floor(Math.random() * 4) + 1);
      username += surname.slice(0, numCharacters);
      if (username.length >= 16) {
        break;
      }
    }
  
    username = username
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[ç]/g, 'c')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[ñ]/g, 'n')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ýÿ]/g, 'y')
        .toLowerCase();
    username = username.replace(/[^a-zA-Z]/g, '');
    username = username.toLowerCase();
    document.getElementById("username").value = username;

    var copyText = document.getElementById("username");
    copyText.select();
    document.execCommand("copy");
  }