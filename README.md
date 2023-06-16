# LoyMark
LoyMark

Instrucciones:

1) Dentro de la carpeta database se encuentran 4 archivos:
    * Archivo database.sql contiene el script para generar la base de datos
    * Archivo tabla_usuarios.sql, es el script para generar la tabla usuarios
    * Archivo tabla_actividades.sql, es el script para generar la tabla actividades
    * El archivo conexion contiene el comando scaffold para realiza la conexion de la base con el backend. (Quien lo ejecute debera poner sus credenciales 
    * de sql server, este mismo se ejecuta en la consola de administracion de paquetes, dentro de Visual Studio)

2) Como se menciono en el punto anterior, debemos realizar la conexion de la base de datos con el backend, dentro de la carpeta backend existe una carpeta llamada
EF que es donde se generaron las clases Usuarios, Actividad y la clase DbContext(estas clases se generan luego de de ejecutar el comando mencionado anteriormente)
Se recomienda eliminar esta carpeta y ejecutar el comando correspondiente para que genere las clases correctamente.

3) En la carpeta front-end tenemos toda la interfaz. Lo que debemos modificar es el archivo enviroment.ts la URL de la api(url del backend) que corresponda. 
4) Luego ejecutar el comando ng serve para poder levantar el front.


