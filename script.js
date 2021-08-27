//kata fill


const newFill =(array, valor,inicio,fim)=>{
let tamanhoArray = array.length;
let contador=inicio ; 
    if(contador<0){
    tamanhoArray+=(inicio*-1);
    contador=0;
    }else if(fim<0){
    tamanhoArray+=(fim*-1);
    fim =tamanhoArray;
  }
 for(contador; contador<tamanhoArray; contador++){
  
  if(contador<=fim){
   retornafill(array,contador,valor);
  }
  
}
 return array
}

 function retornafill  (array,contador,valor){
   console.log(contador);
  array[contador]=valor;
    return array;
}

//kata map
const newMap=(array,funtion) =>{
  let returno=[]
  for(let cont= 0; cont<array.length; cont++){

    returno.push(funtion(array[cont]))
  }
  return returno;
}

//kata some
const newSome = (array, funcao)=>{
  for(let i=0;i<array.length;i++) {

    comparadorSome(array[i],funcao);

  }
}
  const comparadorSome=(valor, funcao)=>{

    if(valor&&funcao == true) {
      return true;
    }else
      return false;

  }

//kata find
const newFind = (array, parametro) =>{
  let testa=null;
  for(let i=0; i<array.length; i++){
   if(testa!==parametro)
    testa= comparadorFind(array[contador],parametro);
      else
        return testa;
  }
  return undefined;

  
}

const comparadorFind=(valor,parametro)=>{
 
      if(valor===parametro){
        return valor[contador];
      }    
 
}
//kata findIndex
const newFindIndex = (array, parametro,indiceInicio) =>{
  if(indiceInicio===undefined){
    indiceInicio=0; 
  }
     comparadorFindIndex(array,parametro, indiceInicio);
  
  
}

const comparadorFindIndex=(valor,parametro, indiceInicio)=>{
 

    for(indiceInicio; indiceInicio<valor.length;indiceInicio++) {
      if(valor[contador]===parametro){
        return indiceInicio;
      }    
    }
      return -1;
}


//kata every

const newEvery = (array, parametro,indiceInicio) =>{
  if(indiceInicio===undefined){
    indiceInicio=0; 
  }
 let vendo =0;
     for(indiceInicio; indiceInicio<array.length;indiceInicio++) {
      vendo =comparadorEvery(array[indiceInicio],parametro)
    
    }
    if(vendo>0){
      return console.log('truthy');
    }else
      return console.log('falsy');

  
}

const comparadorEvery=(valor, parametro)=>{
  
  if(valor===parametro){
    return 1;
  }else return 0;

  
}

//kata filter
const newFilter = (array, parametro) =>{
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
const newConcat = (...arguments) => {
  let arrayMaster;
    arrayMaster.push(...arguments);
  return arrayMaster;
}

//kata includes

const newIncludes = (array, parametro, indiceInicio) =>{
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

const newIndexOf = (array, parametro, indiceInicio) =>{
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
const newForEach = (array, funcao, indice)=>{
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

const newJoin = (array, separador) => {
  let junta = "";
  for (let i = 0; i < array.length; i++) {
    if(separador=== undefined)
    separador ="";
    junta = kataJoin(junta, array[i],separador);
  }
 return junta;
}

//Kata reduce 

const newReduce =(array, acomulador) => {
  let reduce = 0;
  if(acomulador===undefined){
    acomulador =0;
  }
  for(acomulador ; acomulador<array.length; acomulador++){
      reduce = somareduce(array[acomulador],reduce);
  }

  }
  const somareduce = (valor1,valor2) => valor1+valor2;