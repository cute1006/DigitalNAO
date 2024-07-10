enum ContractStatus {
    Permanent /*para que empiecen con el valor 1 */ =1,
    Temp,
    Apprentice
}
let employeeStatus: ContractStatus = ContractStatus.Apprentice;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
//practica
 enum Nombres{
    Maria,
    Jose,
    Luisa,
    Karla
 }

 let Nombre :Nombres = Nombres.Maria
 console.log(`El nombre es: ${Nombres[Nombre]}`)