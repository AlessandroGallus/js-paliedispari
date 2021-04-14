parola_check();

function parola_check(){
  var parola = prompt("Inserisci la parola");
  var palindromo =true;
  var arr_parola = [];
  var arr_contrario = [];
  var z = 0;

  for(var i=0;i<parola.length; i++){
    arr_parola[i] = parola.charAt(i);
  }
  for(var j=parola.length-1; j>=0 ; j--){
    arr_contrario[z] = parola.charAt(j);
    z++;
  }
  /* console.log(arr_parola)
  console.log(arr_contrario) */

  for(var x=0; x<parola.length; x++){
    if(arr_parola[x] == arr_contrario[x]){
      palindromo =true;
    }else{
      palindromo =false;
    }
  }

  if(palindromo){
    console.log("la parola " + parola + " è palindroma")
  }else{
    console.log("la parola " + parola + " non è palindroma")
  }
}

