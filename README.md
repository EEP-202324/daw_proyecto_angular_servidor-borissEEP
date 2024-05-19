## FP EEPIGROUP (Angular y SpringBoot)

### Descripción del proyecto:

Aplicación inspirada en las formaciones profesionales de la escuela EEPiGroup, capaz de mostrar al usuario una lista de formaciones, añadir una nueva, modificar y borrar la que quiera. También una barra de búsqueda que facilita filtrar las formaciones que el usuario desea encontrar. Para la creación de la parte cliente utilizamos Angular, y para la parte de servidor utilizamos Spring. Dentro de cada formación se encuentran sus detalles, los cuales son: su ID, nombre, modalidad y finalmente la titulación

#### ANGULAR:

La aplicación posee 2 pantallas, una en la que muestra la barra de búsqueda y un top de formaciones, y otra donde lista las formaciones y añadir una nueva.

    1. Posee una barra de búsqueda la cual filtra formaciones que el usuario desea buscar.
    2. Pantalla que permite consultar los datos de una formación.
    3. Formulario que permite editar los datos.
    4. Botón de eliminar una formación que el usuario desee.

#### SPRING:

La aplicación se conecta con una Base de Datos, en este caso MySQL, en la cual se encuentra una tabla formaciones con los siguientes campos: id, name, modalidad, titulacion.

    1. GetMapping que encuentra por Id una formacion y devuelve ok si la encuentra y sino NotFound.
    2. PostMapping para crear una nueva formación con los datos requeridos.
    3. GetMapping con método findAll que recupera todas las formaciones con paginación y ordenación.
    4. GetMapping "search" busca las formaciones con una cadena especifica.
    5. PutMapping que permite actualizar una formación existente por su ID.
    6. DeleteMapping que permite eliminar una formación por su ID.
    7. Me aseguro que todo funciona con SWAGGER.

### Puntos de Rúbrica no aplicados:

#### ANGULAR:

    1. Widget y RadioButton para filtrar por modalidad una formación.
    2. Falta paginación.
    3. No se añadieron Test Unitarios.

#### SPRING:

    1. Tabla adicional con las relaciones (1:N)
    2. Me faltó modificar los tests por verbo pero funcionan.

#### RESULTADO FINAL:

    1. Comprobamos que la conexión Angular y Spring funciona como debe ser.
    2. Conexión con MySQL exitosa.

### Video Proyecto Final:

    https://eepmad-my.sharepoint.com/:v:/g/personal/balexis-ruiz1_eep-igroup_com/EWmLjh5hvZ9OuMh05NLf04EBXxprbJCGf_fzw-z1t1ll-w?e=eLnf9x