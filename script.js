// Defina a data que você está contando
var countDownDate = new Date("Aug 21, 2023 23:59:59").getTime();

// Atualize a contagem a cada 1 segundo
var countdownfunction = setInterval(function () {
  var now = new Date().getTime();

  // Encontre a distância entre agora e a data da contagem regressiva
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "LANÇAMENTO REALIZADO!";
  }
}, 1000);
