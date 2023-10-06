# Filtro React

## Instalacion y uso
Para hacer uso de **Filtro React**  se debe tener instalado [GIT](https://git-scm.com/), [Node.js](https://nodejs.org/es/)

> Nota: El proyecto hace uso de la version de nodejs v18.17.0

### Clonar el repositorio
```bash
git clone https://github.com/Kevin2606/filtro_react.git
```
> Una vez clonado el repositorio accede a la carpeteta del proyecto
### Instalar dependencias
```bash
npm install
```
### Configurar variables de entorno
El proyecto **ya tiene la configuracion de las variables de entorno**, simplemente inicializa el proyecto despues de instalar las dependencias.
Asegurese de tener estos puertos libres: **5196** y **5197**

>**Cada cambio en las variables de entorno requiere reiniciar el servidor para que los cambios surtan efecto.**

### Base de datos
En la carpeta **api/db** se encuentra el archivo **query.mongodb** que contiene el script para crear la base de datos y las tablas necesarias para el funcionamiento del proyecto.

> Nota: Se realizo un cambio en la query.mongodb, en la coleccion de **producto**, se añadio la propiedad **categoria**, para hacer mas sencillas las busquedas

### Iniciar el servidor
Para iniciar el servidor se debe ejecutar en la terminal para iniciar el servidor.

> **Iniciar el servidor del backend**
```bash
npm start 
```
> **Iniciar el servidor del frontend**

```bash
npm run dev
```
### Endpoints Backend


| Ruta          | Método | Límite de Tasa                    | Middleware de Límite                |
|---------------|--------|-----------------------------------|------------------------------------|
| `/producto/:categoria`   | GET    | 10 solicitudes/10 segundos       | - Rechaza `content-length` > 1 y responde 413 o 429.    |
| `/categoria`  | GET    | 10 solicitudes/10 segundos       | - Rechaza `content-length` > 1 y responde 413 o 429.    |
| `/compra`     | POST   | 5 solicitudes/30 segundos        | - Rechaza `content-length` > 9999 y responde 413 o 429. |

### Screenshots Frontend 
### **Version Desktop**
![](img/Captura%20desde%202023-10-06%2017-11-11.png)
![](img/Captura%20desde%202023-10-06%2017-11-38.png)
![](img/Captura%20desde%202023-10-06%2017-12-19.png)
![](img/Captura%20desde%202023-10-06%2017-12-26.png)

### **Version Mobile**
![](img/Captura%20desde%202023-10-06%2017-18-06.png)
![](img/Captura%20desde%202023-10-06%2017-18-15.png)
![](img/Captura%20desde%202023-10-06%2017-18-26.png)
![](img/Captura%20desde%202023-10-06%2017-18-33.png)

## Autor

- Kevin Gallardo - [@Kevin2606](https://github.com/Kevin2606)