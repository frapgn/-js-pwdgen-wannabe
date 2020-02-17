var name = prompt('Qual è i ltuo nome?');
var lastname = prompt('Qual è i ltuo cognome?');
var favouriteColor = prompt('Qual è il tuo colore preferito?');
document.getElementById('pwdgen1').innerHTML = name + lastname + favouriteColor + '20';

var year = new Date().getFullYear();
console.log(year);
// var year = date.getFullYear();
document.getElementById('pwdgen2').innerHTML = name + lastname + favouriteColor + year;

document.getElementById('pwdgen3').innerHTML = name + ';' + lastname + ';' + favouriteColor + ';' + year;

document.getElementById('pwdgen4').innerHTML = 
