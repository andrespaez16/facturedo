# Facturedo app

## Guia para intalacion y clonacion del proyecto , compilacion de pruebas TDD

```  

Este proyecto esta hecho en Ionic 5.4.13 con core en angunlar ,este es  una breve induccion de como instalar el repo en tu laptop sin ningun problema y ejecutar la pruebas existentes en el proyecto.

### Instructivo:

**Paso 1. Instalar NodeJS en su ultima versión, para eso entraremos a su web oficial y descargaremos el instalador más actualizado
<https://nodejs.org/es/>**

**Paso 2. Actualizar NPM, el gestor de paquetes de node, para bajarnos las dependencias más actuales:**

npm install -g npm@latest

**Paso 3. Desactivar las auditorias de NPM para evitar fallos:**

npm set audit false

**Paso 4. Borrar la cache de NPM de nuevo:**

npm cache clean --force

**Paso 5. Instalar la última versión de Ionic CLI:**

npm install -g ionic

**Paso 7. Ingresar al proyecto y subir servidor:**

    ionic serve o ionic s

 Digitar en la terminal ng serve  o ng s para que el proyecto suba servido  por el local host:8100


 **8.Compilacion de pruebas TDD con Karma y Jasmine:**

 Digitar en la terminal ng test y automaticamente abre la ventana para el porcentage y el desarrollo del test de las pruebas.


** 9.Ver el porcentage de cubrimiento de codigo:**

 Dentro del proyecto se va identificar una carpeta con nombre coverage , dentro de esta carpeta  esta  el index.hmtml y ahi se podra ver el informe correspondiente.

```