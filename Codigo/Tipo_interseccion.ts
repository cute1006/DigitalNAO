interface Employee {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
  };
  console.log(newManager)
  
  //creacion de ejemplo utilizando interface

  interface Especificaciones{
    color: string;
    marca: string;
    modelo: string;
    año: number;
  };

  interface TiposVehiculos{
    carro: string;
    camioneta: string;
    /*camion: string;
    tucson: string;*/
  }

  type Eleccion = Especificaciones & TiposVehiculos;
  let eleccion :Eleccion = {
      carro:'Si es u carro',
      /*camion:'dos',
      tucson:'tres',*/
      camioneta:'cuatro',
      color:'blanco',
      marca: 'Toyota',
      modelo: 'Raize',
      año: 2022
  };

  console.log(eleccion)

