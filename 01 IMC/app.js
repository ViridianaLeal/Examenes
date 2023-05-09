let peso =document.querySelector("#peso")
let altura =document.querySelector("#altura")
let res=document.querySelector("#res")
let con=document.querySelector("#con")
peso.oninput=()=>{calcular()}
altura.oninput=()=>{calcular()}

const calcular=()=>{
    let vpeso=parseInt(peso.value)
    let valtura=parseFloat(altura.value)
    document.querySelector("#vpeso").innerHTML=vpeso+"KG"
    document.querySelector("#valtura").innerHTML=valtura+"M"

    let imc=vpeso/(valtura*valtura);

    if(imc<=18.49) {
        res.innerHTML=imc.toFixed(2);
        con.innerHTML="BAJO PESO";
    }else if(imc >=18.50 && imc<=24.99){
        res.innerHTML=imc.toFixed(2);
        con.innerHTML="NORMAL";
    }else if(imc >=25 && imc<=29.99) {
        res.innerHTML=imc.toFixed(2);
        con.innerHTML="SOBREPESO";
    }else if(imc >=30 && imc<=34.99) {
        res.innerHTML=imc.toFixed(2);
        con.innerHTML="OBESIDAD 1";
    }else if(imc >=35 && imc<=39.99) {
        res.innerHTML=imc.toFixed(2);
        con.innerHTML="OBESIDAD 2";
    }else if(imc >=40) {
        res.innerHTML=imc.toFixed(2);
        con.innerHTML="OBESIDAD 3";
    }
}