
function updateInputs(){

    const mode = document.getElementById('mode').value;

    document.getElementById('kwBox').style.display = 'block';
    document.getElementById('ampBox').style.display = 'block';

    if(mode === 'A'){
        document.getElementById('ampBox').style.display = 'none';
    }

    if(mode === 'kW' || mode === 'HP'){
        document.getElementById('kwBox').style.display = 'none';
    }
}

function calculate(){

    const loadType = document.getElementById('loadType').value;
    const phase = parseInt(document.getElementById('phase').value);
    const mode = document.getElementById('mode').value;

    let volt = parseFloat(document.getElementById('volt').value);
    let pf = parseFloat(document.getElementById('pf').value);
    let overloadPercent = parseFloat(document.getElementById('overloadPercent').value);

    if(loadType === 'R'){
        pf = 1;
    }

    let kw = 0;
    let amp = 0;
    let hp = 0;

    if(mode === 'A'){

        kw = parseFloat(document.getElementById('kw').value);

        if(phase === 1){
            amp = (kw * 1000) / (volt * pf);
        }else{
            amp = (kw * 1000) / (Math.sqrt(3) * volt * pf);
        }

        hp = kw / 0.746;
    }

    if(mode === 'kW'){

        amp = parseFloat(document.getElementById('ampInput').value);

        if(phase === 1){
            kw = (volt * amp * pf) / 1000;
        }else{
            kw = (Math.sqrt(3) * volt * amp * pf) / 1000;
        }

        hp = kw / 0.746;
    }

    if(mode === 'HP'){

        amp = parseFloat(document.getElementById('ampInput').value);

        if(phase === 1){
            kw = (volt * amp * pf) / 1000;
        }else{
            kw = (Math.sqrt(3) * volt * amp * pf) / 1000;
        }

        hp = kw / 0.746;
    }

    let overload = amp * (overloadPercent / 100);

    let cable = "";

    if(amp <= 15){
        cable = "2.5 mm²";
    }else if(amp <= 20){
        cable = "4 mm²";
    }else if(amp <= 30){
        cable = "6 mm²";
    }else if(amp <= 50){
        cable = "10 mm²";
    }else{
        cable = "16 mm²";
    }

    document.getElementById('ampResult').innerText = amp.toFixed(2) + " A";
    document.getElementById('kwResult').innerText = kw.toFixed(2) + " kW";
    document.getElementById('hpResult').innerText = hp.toFixed(2) + " HP";
    document.getElementById('overloadResult').innerText = overload.toFixed(2) + " A";
    document.getElementById('cableResult').innerText = cable;
}

updateInputs();
calculate();
