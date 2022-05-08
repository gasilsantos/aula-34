let opçao = 0;

let streaming = [
    {
        nome: "Amazon prime",
        mensalidade: 32.00,
    },
    {
        nome: "HBO max",
        mensalidade: 42.00,
    },
    {
        nome:"Disney plus",
        mensalidade: 50.00,
    }
];

switch(opçao){
    case 0:
        console.log(streaming[0]);
        break;
    case 1:
        console.log(streaming[1]);
        break;
    case 2:
        console.log(streaming[2]);
        break;
    default:
        console.log("opção não encontrada")
        break;            
}

//console.log(opçao)