function calculate() {
  let kw = parseFloat(document.getElementById('kw').value);
  let volt = parseFloat(document.getElementById('volt').value);
  let pf = parseFloat(document.getElementById('pf').value);
  let phase = parseInt(document.getElementById('phase').value);

  let amp;

  if (phase === 1) {
    amp = (kw * 1000) / (volt * pf);
  } else {
    amp = (kw * 1000) / (Math.sqrt(3) * volt * pf);
  }

  let hp = kw / 0.746;
  let overload = amp * 1.25;

  let cable;

  if (amp <= 15) cable = "2.5 mm²";
  else if (amp <= 20) cable = "4 mm²";
  else if (amp <= 30) cable = "6 mm²";
  else if (amp <= 50) cable = "10 mm²";
  else cable = "16 mm²";

  document.getElementById('amp').innerText = amp.toFixed(2) + " A";
  document.getElementById('hp').innerText = hp.toFixed(2) + " HP";
  document.getElementById('overload').innerText = overload.toFixed(2) + " A";
  document.getElementById('cable').innerText = cable;
}

calculate();
