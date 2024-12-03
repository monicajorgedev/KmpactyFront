# **PROJECT KMPACTY FRONT .**

En este proyecto se ha creado una buscador de actividades extraescolares y campamentos para la provincia de Segovia, donde en la parte publica se puede consultar las actividades y campamentos haciendo busqueda general, o filtrada. 
Por otro lado, existe una parte privada donde las compañias que quieran crear un anuncio de una actividad o campamento, tienen que registrarse y logarse para poder crear, actualizar o eliminar un anuncio.    

La aplicacion esta desplegada en un entorno productivo en la siguiente url: [https://674af75a051b7e00083615f2--kmpacty.netlify.app/](https://674af75a051b7e00083615f2--kmpacty.netlify.app//)


## INSTALACIÓN:

Para este proyecto se ha utiliza React, Firebase para la parte de autenticación, react-router-dom para generar las rutas, react-file-base64 para subir imagenes en base 64.

Ejecutar los siguientes comandos en la raiz del proyecto:


1. Instalacion de paquetes

```
npm install
```

2. Comando para ejecutar el proyecto en modo desarrollo.
```
npm run dev
```

3. Crear fichero `.env` con la siguiente configuracion:

- VITE_APP_URL_API: url de la API 

Las siguientes variables nos las proporciona Firebase.
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID


## DESCRIPCIÓN:

**RUTAS**

Las rutas son las siguientes. 

- `/` : Home donde se encuentra el buscador.
- `/login`: Para logarse las compañias o empresas. 
- `/register` : Donde se puede registrar una compañia o empresa. 
- `/activity_create` : Donde se puede crear una actividad o campamento. 
- `/activity/:id` : Página donde aparece el detalle de una actividad o campamento.   
- `/activity/:id/update` : Donde se puede modificar o eliminar una actividad o campamento.  
- `/activities/by-company`: Página donde aparecen las actividades de una compañia. 


**DISTRIBUCIÓN DE CARPETAS DEL PROYECTO.**

- components. Carpeta donde se encuentran los componentes, con la subcarpeta forms donde están todos los formularios 
y los archivos de diferentes componentes 
- config. Es donde estan los archivos de configuración de firebase. 
- context. Carpeta donde se crea el contexto para poder comprobar si el usuario está logado o no. 
- data. Con un archivo donde se encuentran los datos de los selects (tipos, categorias, subcategorias, localidades, fechas) 
y unas funciones para obtener el  valor según la key informada.
- pages. Con las diferentes páginas para cada ruta antes mencionada.
- routes. Con el archivo RoutesApp donde se encuentra el enroutador. 
- App.jsx. Donde se envuelve el enrutador con el contexto. 
- main.jsx. Donde se captura el root de index para renderizar todo el código creado con React. 
- index.html. Documento html básico donde enlazar nuestro proyecto.