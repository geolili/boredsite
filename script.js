function loadActivity() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var risposta = this.response;
      var rispostaparsata = JSON.parse(risposta);
      var attivita = rispostaparsata.activity;
      document.getElementById("divactivityresp").innerHTML =
        "<div id='divactivity'>" + attivita + "</div>";
    }
  };
  xhttp.open(
    "GET",
    "https://www.boredapi.com/api/activity/?participants=1",
    true
  );
  xhttp.send();
}
