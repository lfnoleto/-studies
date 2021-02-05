// function random(min,max){
//     const r = Math.random() * (max - min) + min
//     return Math.floor(r)
// }


// let rand = 10

// while(rand !== 10){
//     rand = random(1,50)
//     console.log(rand)
// }

// console.log('Foi iqual a 10')

// do{
//     rand = random(1,50)
//     console.log(rand)
// }while(rand !== 10);


const numeros = [1,2,3,4,5,6,7,8,9]

// for( numero of numeros){
    
//     if (numero === 2) continue
//     console.log(numero)
//     if(numero === 7) break
// }
let i = 0

while(i < numeros.length){

  let numero = numeros[i]

  if(numero === 2){
    console.log('Pulei o numero')
    i++
    continue
  }

  console.log(numero)

  if(numero === 7){
      console.log(' 7 encontrado saindo')
      i++
      break
  }
i++
}


