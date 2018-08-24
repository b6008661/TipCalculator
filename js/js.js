function setLabelOutstanding() {
  document.getElementById('service-label').innerHTML = "Outstanding";
  document.getElementById('service-label').value = 0.3;
};
function setLabelGood() {
  document.getElementById('service-label').innerHTML = "Good";
  document.getElementById('service-label').value = 0.2;
};
function setLabelSatisfactory() {
  document.getElementById('service-label').innerHTML = "Satisfactory";
  document.getElementById('service-label').value = 0.1;
};
function setLabelPoor() {
  document.getElementById('service-label').innerHTML = "Poor";
  document.getElementById('service-label').value = 0.5;
};

function calculateTip() {
  var billAmt = document.getElementById('billAmount').value;
  var service = document.getElementById('service-label').value;
  var numOfPeople = document.getElementById('people').value;

  if (billAmt === "" || service == 0) {
   alert("Please enter values");
   return;
 }
 if (numOfPeople === "" || numOfPeople <= 1) {
   numOfPeople = 1;
   document.getElementById("each").style.display = "none";
  }
  else {
    document.getElementById("each").style.display = "block";
  }

  var total = (billAmt * service) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

};

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById('outstanding').onclick = function() {
    document.getElementById('service-label').innerHTML = "Outstanding";
}
document.getElementById("calculate").onclick = function() {
  calculateTip();
}
