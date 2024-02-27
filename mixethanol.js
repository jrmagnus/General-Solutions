document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        const values = mixEthanolCalc(this.value, this.id);
    });
});

function mixEthanolCalc(valor, id) {
    let petrolLiters = parseFloat(document.getElementById('gasliters').value);
    let petrolEthanolPercent = parseFloat(document.getElementById('ethanolpercentgas').value);
    let ethanolLiters = parseFloat(document.getElementById('ethanolliters').value);
    let mixResult = 0;
    switch (id) {
        case 'gasliters':
            petrolLiters = parseFloat(valor);
            break;
        case 'ethanolpercentgas':
            petrolEthanolPercent = parseFloat(valor);
            break;
        case 'ethanolliters':
            ethanolLiters = parseFloat(valor);
            break;
        default:
            break;
    }
    
    let petrolPure = petrolLiters * (1 - petrolEthanolPercent / 100);
    let totalEthanolLiters = petrolLiters - petrolPure;
    totalEthanolLiters = totalEthanolLiters + ethanolLiters;
    mixResult = (totalEthanolLiters / (petrolLiters + ethanolLiters)) * 100;
    // alert('Mix = ' + mixResult + ' - Eth ' + totalEthanolLiters + ' - Ptr ' + petrolPure);
    if (!isNaN(mixResult)) {
        document.getElementById('mixresult').textContent = "E " + mixResult.toFixed(2);
    } else {
        document.getElementById('mixresult').textContent = "E ??";
    }
        

    return {
        petrolLiters: petrolLiters,
        petrolEthanolPercent: petrolEthanolPercent,
        ethanolLiters: ethanolLiters
    };
}
