var name = prompt('Qual è i ltuo nome?');
var lastname = prompt('Qual è i ltuo cognome?');
var favouriteColor = prompt('Qual è il tuo colore preferito?');
// Es 1
document.getElementById('pwdgen1').innerHTML = name + lastname + favouriteColor + '20';
var year = new Date().getFullYear();
// Es 2
document.getElementById('pwdgen2').innerHTML = name + lastname + favouriteColor + year;
// Es 3
document.getElementById('pwdgen3').innerHTML = name + ';' + lastname + ';' + favouriteColor + ';' + year;
// Es 4
document.getElementById('pwdgen4').innerHTML = name + ';' + lastname + ';' + favouriteColor + ';' + (year - 2000);
