
function updateUI(){

const mode = document.getElementById('mode').value;
const loadType = document.getElementById('loadType').value;

const mainLabel = document.getElementById('mainInputLabel');
const mainInput = document.getElementById('mainInput');

const pf = document.getElementById('pf');

if(loadType === 'R'){
    pf.value = 1;
    pf.disabled = true;
}else{
    pf.disabled = false;
}

if(mode === 'A'){
    mainLabel.innerText = 'Current (A)';
    mainInput.value = 10;
}

if(mode === 'kW'){
    mainLabel.innerText = 'Power (kW)';
    mainInput.value = 5;
}

if(mode === 'HP'){
    mainLabel.innerText = 'Horsepower (HP)';
    mainInput.value = 10;
}

}

function calculate(){

const mode = document.getElementById('mode').value;
const phase = parseInt(document.getElementById('phase').value);

const volt = parseFloat(document.getElementById('volt').value);
const pf = parseFloat(document.getElementById('pf').value);
const overloadPercent = parseFloat(document.getElementById('overloadPercent').value);

const input = parseFloat(document.getElementById('mainInput').value);

let amp = 0;
let kw = 0;
let hp = 0;

if(mode === 'A'){

    amp = input;

    if(phase === 1){
        kw = (volt * amp * pf) / 1000;
    }else{
        kw = (Math.sqrt(3) * volt * amp * pf) / 1000;
    }

    hp = kw / 0.746;
}

if(mode === 'kW'){

    kw = input;

    if(phase === 1){
        amp = (kw * 1000) / (volt * pf);
    }else{
        amp = (kw * 1000) / (Math.sqrt(3) * volt * pf);
    }

    hp = kw / 0.746;
}

if(mode === 'HP'){

    hp = input;

    kw = hp * 0.746;

    if(phase === 1){
        amp = (kw * 1000) / (volt * pf);
    }else{
        amp = (kw * 1000) / (Math.sqrt(3) * volt * pf);
    }
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

updateUI();
calculate();
