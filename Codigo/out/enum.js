var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Apprentice;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
//practica
var Nombres;
(function (Nombres) {
    Nombres[Nombres["Maria"] = 0] = "Maria";
    Nombres[Nombres["Jose"] = 1] = "Jose";
    Nombres[Nombres["Luisa"] = 2] = "Luisa";
    Nombres[Nombres["Karla"] = 3] = "Karla";
})(Nombres || (Nombres = {}));
var Nombre = Nombres.Maria;
console.log("El nombre es: ".concat(Nombres[Nombre]));
//# sourceMappingURL=enum.js.map