function convert() {
  let celsius = parseFloat(document.getElementById('celsius').value);

  if (isNaN(celsius)) {
      alert("Masukkan suhu dalam angka!");
      return;
  }

  let fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  document.getElementById('conversion-result').innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function reverse() {
  let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  if (isNaN(fahrenheit)) {
      alert("Masukkan suhu dalam angka!");
      return;
  }

  let celsius = (fahrenheit - 32) * 5/9;
  document.getElementById('celsius').value = celsius.toFixed(2);
  document.getElementById('conversion-result').innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}

function reset() {
  document.getElementById('celsius').value = '';
  document.getElementById('fahrenheit').value = '';
  document.getElementById('conversion-result').innerText = "Masukkan suhu dan klik 'Konversi'";
}
