//kata fill
//kata map
//kata some
//kata find
//kata findiIndex
//kata every


//kata filter
const kataFilterParaUsar = (array, parametro) =>{
  if(indiceInicio===undefined){
    indiceInicio=0; 
  }
  let recebe;
  let arrayFinal=[];
  for(let cont= 0 ; cont<array.length; cont++){
  recebe= comparadorFilter(array[cont],parametro);
    if(recebe===true){
      arrayFinal.push(array[cont]);
    }
  }
  return arrayFinal;
}
const comparadorFilter=(valor,parametro)=>{
  let testaParaMetro = parametro.split("");
  let contaParametro =0;

    for(let contador=0; contador<valor.length;contador++) {
      if(valor[contador]===testaParaMetro[contaParametro]){
        contaParametro++;
      }else{
        contaParametro = 0;
      }    
    }
    if(contaParamet===testaParaMetro.length){
      return true;
    }else
      return false;
}

//kata concat
const kataConcatParaUsar = (...arguments) => {
  let arrayMaster;
    arrayMaster.push(...arguments);
  return arrayMaster;
}

//kata includes

const kataIncludesParaUsar = (array, parametro, indiceInicio) =>{
  if(indiceInicio===undefined){
    indiceInicio=0; 
  }
  for( indiceInicio; indiceInicio<array.length; indiceInicio++){
    comparadorIncludes(array[indiceInicio],parametro, indiceInicio);

  }
}
const comparadorIncludes=(valor,parametro)=>{
  let testaParaMetro = parametro.split("");
  let contaParametro =0;

    for(let contador=0; contador<valor.length;contador++) {
      if(valor[contador]===testaParaMetro[contaParametro]){
        contaParametro++;
      }else{
        contaParametro = 0;
      }    
    }
    if(contaParamet===testaParaMetro.length){
      return true;
    }else
      return false;
}


//kata indexof

const kataIndexOfParaUsar = (array, parametro, indiceInicio) =>{
  if(indiceInicio===undefined){
    indiceInicio=0; 
  }
  for( indiceInicio; indiceInicio<array.length; indiceInicio++){
    comparador(array[indiceInicio],parametro, indiceInicio);

  }
}
const comparador=(valor,parametro, indiceInicio)=>{
  let testaParaMetro = parametro.split("");
  let contaParametro =0;

    for(let contador=0; contador<valor.length;contador++) {
      if(valor[contador]===testaParaMetro[contaParametro]){
        contaParametro++;
      }else{
        contaParametro = 0;
      }    
    }
    if(contaParamet===testaParaMetro.length){
      return indiceInicio;
    }
}

//kata ForEach
const kataForEachParaUsar = (array, funcao, indice)=>{
  for(let contador=0;contador<array.length;contador++){
  if(indice===undefined){  
    funcao(array[contador])
  }else if(indice!==undefined&&indice===contador){
    funcao(array[contador] ,contador);
  }
  
  }
}
const testaPar =(n)=>{
  if(n%2===0){
    return console.log(n);
  }
  
}

//kata join

const kataJoin = (arrayvalorbase, arrayvalor2,separador) => arrayvalorbase + arrayvalor2+separador;

const kataJoinParaUsar = (array, separador) => {
  let junta = "";
  for (let i = 0; i < array.length; i++) {
    if(separador=== undefined)
    separador ="";
    junta = kataJoin(junta, array[i],separador);
  }
 return junta;
}

//Kata reduce 

const kataReduceParaUsar =(array, acomulador) => {
  let reduce = 0;
  if(acomulador===undefined){
    acomulador =0;
  }
  for(acomulador ; acomulador<array.length; acomulador++){
      reduce = somareduce(array[acomulador],reduce);
  }

  }
  const somareduce = (valor1,valor2) => valor1+valor2;