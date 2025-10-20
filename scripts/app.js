/* tipos de atributos

var, int e const 

var - global (não é seguro evite.)
let - local e muda o valor 
const - local e valor nao muda

JavaScript é dinamico - as variaveis ele quando é atribuido a um valor ele identifica automaticamente
TypeScript - SuperSet de JS Melhorado e tipado.

let n = "11.3"
String n = "Luiz"

//Java/C#/C++ - fortemente tipado
double n = 11

paradigma - padrao a ser seguido, maneiras de se programar. 

fortemente tipado - ou vc programa desse jeito ou desse jeito 

nivel maior - mais perto do entendimento humano

nivel menor - mais perto de entendimento de maquina


*/

//fazendo dicionario (id 1 posicao 0, id 2 posicao 1 id 3 posicao 2, e assim por diante)

function dados() {
    let ds = [
               {id:1,login:"ringo" , password: "1234@" , nome: "ringo star" , email: "ringo@gmail.com"}, 
               {id:2,login:"paul" , password: "12345" , nome: "paul allen" , email: "paulallen@gmail.com"},
               {id:3,login:"patrick" , password: "123456" , nome: "patrick bateman" , email: "batemanpatrick@gmail.com"}
             ]

             return ds

}



function teste(){
const ds = dados()

  alert("Meus dados: \n " + ds[0].nome)
  console.log("Meus dados: \n" + ds[0].nome)

}


//Seleção

function selecionar(id) {

 const ds = dados()

 if(id == ds[i].id){
alert("Vc encontrou o usuario: " + id)
} 


  
}

function achar() {

  let n = parseInt(document.querySelector("#id").value) 
  
  selecionar(n) 

}