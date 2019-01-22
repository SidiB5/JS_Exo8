function getSidi(){
var regexp = new RegExp (/[1-9]/);
  var age = document.getElementById('age').value;
if (age >= 18) {
  alert('Vous êtes majeur');
}else{
  alert('Vous êtes mineur');
}
}
