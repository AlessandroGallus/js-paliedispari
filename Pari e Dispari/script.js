function inserimento(){
  var numero_inserito = parseInt(prompt("inserisci un numero da 1 a 5"));
  if(numero_inserito < 1 || numero_inserito > 5){
      console.log("Il numero non è valido")
  }
  return(numero_inserito);
}
function generazione(){
  var numero_generato= 0;
  numero_generato=Math.floor((Math.random()*5)+1)
  return (numero_generato);
}
function somma(numero_inserito, numero_generato){
  var numero_inserito = inserimento();
  var numero_generato = generazione();
  var  somma=numero_inserito+numero_generato;
  console.log("Il numero inserito è " + numero_inserito)
  console.log("Il numero generato è " + numero_generato)
  return(somma);
}
function scelta(){
  var scelta = prompt("inserisci 1 se vuoi scegliere dispari e 2 se vuoi scegliere pari");
  return (scelta)
}
var scelta_numero=scelta();
var somma_numeri = somma();
console.log("la somma dei due numeri è " + somma_numeri)


if(scelta_numero==1 || scelta_numero==2){
  if(scelta_numero == 1){
    if(somma_numeri%2 == 0){
      console.log("Dato che hai scelto dispari e il numero uscito è pari hai perso!!!")
    }else{
      console.log("Bravo! Dato che hai scelto dispari hai vinto!!!!")
    }
  }else{
    if(somma_numeri%2 != 0){
      console.log("Mi dispiace, dato che hai scelto pari e la somma è dispari hai perso!!!")
    }else{
      console.log("Bravo! Dato che hai scelto pari hai vinto!!!!")
    }
  }
}else{
  console.log("ma io... Senti non funziono se metti qualisasi cosa che non sia 1 o 2 quindi ora per piacere riavviami e metti un numero consono, grazie!")
}
  


