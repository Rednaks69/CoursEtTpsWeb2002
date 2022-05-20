
// // exercice 1

// document.getElementById("outputHello").innerHTML="hello Wolrd";

// // exercice 2
// var t = [];
// for ( var i = 0 ; i < 20 ; i++){
//     x=Math.floor(Math.random()*100)+1
//     t[i]=x
// }
// console.log(t);

// // exercice 3
// function submitFunction(){
//     var x1 = document.getElementById("fome1").value
//     if (x1>=0) {
//         console.log("entier");
//         texte ="entier"
//     }else{
//         console.log("caractere");
//         texte="caractere"
//     }
//     document.getElementById("output1").innerHTML=texte
// }


// // exercice 4
// var tab=[]

// function submitFunction2(){
//     var x2 = parseInt(document.getElementById("fome2").value);
    
//     console.log(typeof(x2));
    

//     if (x2>=0) {
//      for ( var k = 0 ; k < x2 ; k++)
//      {
//          tab[k]= Math.floor(Math.random()*100)
//      }
//      console.log(tab);

//     const somme = tab.reduce((tatal, value)=>{return tatal+value})
//     console.log(somme);
    
//     }else{
//         console.log("non valid input");
//     }
// }

// // exercice 5 

// function submitFunction3(){
//     var x3 = parseInt(document.getElementById("fome3").value);
//     for ( var j = 0 ; j < x3 ; j++){
//         for (var l =0 ; l <=j ; l ++){
//             console.log("*");
//         }
//     }
// }


// // correction exercice 1 
// document.getElementById("outputHello").innerHTML="hello world from TIC2"

// // correction exercice 2 
// var t = []
// var somme = 0 
// for(var i = 0 ; i < 20 ; i++){
//     t[i]=Math.floor(Math.random()*99)
//     somme+=t[i]
// }

// document.getElementById("outputExercice2").innerHTML= " la somme est :"+somme
// document.getElementById("outputExercice2-1").innerHTML= " la moyenne est :"+moyenne(somme)


// function moyenne(s){
//     return s/20;
// }


// console.log(t);



// // correction exercice 3 
// function submitFunction(){
//     var labelValue = document.getElementById("fome1").value
//     tpmvalu = parseInt(labelValue)
    
//     if (tpmvalu >=0) {
//         console.log(typeof(intLabel));
//         document.getElementById("output1").innerHTML= "Entier"
//     }else{
//         document.getElementById("output1").innerHTML= "caractere"
//     }
// }


// // correction exercice 4
// function submitFunction2(){
//     var x = parseInt(document.getElementById("fome2").value)
//     var tab = []
//     var somme2 = 0 
//     if (x>=0) {
//         for( var j = 0 ; j < x ; j++){
//             tab[j]= Math.floor(Math.random()*99)
//             somme2 +=tab[j]
//         }
//         console.log(tab);
//         moyenne2(somme2,x)
//     }
// }
// document.getElementById("outputExercice4").innerHTML= " la somme est :"+somme
// document.getElementById("outputExercice4-1").innerHTML= " la moyenne est :"+moyenne(somme)


// function moyenne2(s2,x){
//     return s2/x;
// }


// correction exrecice 5 


function submitFunction3(){
    var number = parseInt(document.getElementById("fome3").value)

    for ( var k = 0 ; k < number ; k++){
        for( var y = 0 ; y <= k ; y++){
            console.log("*");
        }
    }
}