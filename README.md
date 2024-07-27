# DigitalNAO
#versionado

DigitalNAO
  out  --hace referencia cada ejecucion del typescript
  codigo
      1.0.0: any-unknow
      2.0.0:Asersion                                     
      3.0.0 enum
      4.0.0 tipo_datos
      5.0.0 tipo_inserccion
      6.0.0 tipo_colecion
      7.0.0 tipo_literales
      8.0.0 tipo_union
  Screenshot -- las capturas de da uno de los archivos mencionados
  documenatcion de las buenas practicas
  Sprint2
     screenshot --van todas las capturas de pantallas relacionada al Sprint2
     tutorial-nest-js --carpeta del nuevo proyecto
        dist
        node_module
        src
           auth
              dto
                create-auth
                login --referencia del dto para token
                update
              entities
                 auth.entity.ts --hace referncia a la creacion de la tabla en bd
              auth.controller.ts
              auth.module.ts
              auth.service.ts
           books
             dto
                bookDto.ts
                updateDto.ts
              entities
                 book.entity.ts
              books.controller.ts
              books.module.ts
              books.service.ts
            constante
                constante.ts --Hace referencia al token situado en el aith service
            guard
              auth.guard.ts -- aqui se encontra la logica de JWT
            app.controller.ts
            app.module.ts
            app.service.ts    estos tres archivos de aca por propiamente del proyecto principal
   Sprint3
       Entregable.rar -- aqui va la documentacion del sprint3 

          
  NOTA: --referente a los numeros de las versiones de los archivos solo hubo una unica version de los archivos como tal.
   Dentro del archivo pdf estan los enlaces de roadmap y backlog junto con el enlace del repositorio. 
  
  NOTA: Para el sprint2 se utilizo una base de datos de postgres
     con el usuario: postgres
     contraseña: 123
     tablas creadas: 2
         *auth
         *books
  NOTA: Pequeña confusion con las creacion de las tablas (la idea la creacion de los tres modulos:Ventas,Inventario y Atencion al cliente.)Pero hace la peticion del api


NOTA: Enlace del API REST: https://digitalnao.onrender.com/api#/  
NOTA: En esta version hay dos ramas en el GITHub una donde se desplogo el api llamada main y la segunda se llama book-project 
donde se aloja  las documentacion de los sprint anteriores el sprint3 que es el actual
NOTA: En los spec ya estan los test  
NOTA: En la rama main donde se aloja el proyecto en el app-module va los datos de la bd