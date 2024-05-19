## FP EEPIGROUP (Angular y SpringBoot)

### Descripción del proyecto:

Aplicación inspirada en las formaciones profesionales de la escuela EEPiGroup, capaz de mostrar al usuario una lista de formaciones, añadir una nueva, modificar y borrar la que quiera. También una barra de búsqueda que facilita filtrar las formaciones que el usuario desea encontrar.

#### ANGULAR:

La aplicación posee 2 pantallas, una en la que muestra la barra de búsqueda y un top de formaciones, y otra donde lista las formaciones y añadir una nueva.

    - Posee una barra de búsqueda la cual filtra formaciones que el usuario desea buscar.
    - Pantalla que permite consultar los datos de una formación.
    - Formulario que permite editar los datos.
    - Botón de eliminar una formación que el usuario desee.

#### SPRING:

La aplicación se conecta con una Base de Datos, en este caso MySQL, en la cual se encuentra una tabla formaciones con los siguientes campos: id, name, modalidad, titulacion.

    - GetMapping que encuentra por Id una formacion y devuelve ok si la encuentra y sino NotFound.
    - PostMapping para crear una nueva formación con los datos requeridos.
    - GetMapping con metodo findAll que recupera todas las formaciones con paginación y ordenación.
    - GetMapping "search" busca las formaciones con una cadena especifica.
    - PutMapping que permite actualizar una formaciónn existente por su ID.
    - DeleteMapping que permite eliminar una formación por su ID.

### Puntos de Rúbrica no aplicados:

#### ANGULAR:

    - Widget y RadioButton para filtrar por modalidad una formación.
    - Falta paginación.
    - No se añadieron Test Unitarios.

#### SPRING:

    - Tabla adicional con las relaciones (1:M)
    - Me faltó modificar los tests por verbo pero funcionan.