# Diplomatura en Profesional Full-Stack Developer

## Curso de desarrollo con Node JS - Profesor: Gabriel Alberini

### Módulo 1: Node JS

### Unidad 4: Integración Front-Back

### Tarea 4: Conectando mi frontend con la API y desplegando.

### Objetivos:

Conectar un frontend (React o Angular) a un backend en Express.

Realizar peticiones reales y preparar ambos entornos para despliegue.

### Consideraciones:

- Se crea un servidor con **Express** y se definen las rutas RESTful para el manejo de productos.
- Se crea un archivo **index.js** que es el punto de entrada de la aplicación y además tiene configurado el servidor.
- Se crea un archivo **dbconnection.js** para la conexión a la base de datos MongoDB.
- Se puede acceder a la base de datos **MongoDB** utilizando **MongoDB Compass**.
- Se crea un archivo **model.js** para el esquema de los productos.
- Se crea un archivo **.env** para las variables de entorno.
- Se crea un archivo **router.js** para las rutas de la API.
- Se crea un archivo **controller.js** donde se implementan las rutas RESTful para el manejo de productos.
- Se crea un archivo **service.js** donde se implementan las funciones para el manejo de productos, con el objetivo de abstraer la lógica de negocio.
- Se pueden cargar datos en base desde el archivo **assets/data/products.json**. De cualquier manera, la base de datos se creará de forma automática al crear un primer producto.
- Con la division de responsabilidades de los archivos creados, se logra una arquitectura limpia y mantenible.
- Se utiliza **Postman** para probar las rutas.

### Capturas de pantallas:

![MongoDB Compass Connection](./Node-M1-T4-Backend/assets/images/MongoDbCompass.png)

![Welcome](./Node-M1-T4-Backend/assets/images/Welcome.png)

![Get Products](./Node-M1-T4-Backend/assets/images/GetAllProducts.png)

![Get Product by ID](./Node-M1-T4-Backend/assets/images/GetProductById.png)

![Create Product](./Node-M1-T4-Backend/assets/images/CreateProduct.png)

![Delete Product](./Node-M1-T4-Backend/assets/images/DeleteProductById.png)

![Update Product](./Node-M1-T4-Backend/assets/images/UpdateProductById.png)

### Pasos para la ejecución local:

1. Clonar el repositorio:

```bash
git clone https://github.com/Diplomatura-Full-Stack-Developer/Node-M1-T4
```

2. Instalar las dependencias para Backend y Frontend:

```bash
cd Node-M1-T4-Backend
npm install
cd ../Node-M1-T4-Frontend
npm install
```

3. Ejecutar el script de la aplicación en modo desarrollo para Backend y Frontend:

```bash
cd Node-M1-T4-Backend
npm run dev
cd ../Node-M1-T4-Frontend
npm run dev
```

### Recursos utilizados:

- Node JS - Versión 24.20.0 ([https://nodejs.org/es/download/](https://nodejs.org/es/download/))
- Npm - Versión 12.0.2 (instalado por defecto con Node JS)
- Express - Versión 5.3.0 ([https://www.npmjs.com/package/express](https://www.npmjs.com/package/express))
- Mongoose - Versión 9.11.3 ([https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose))
- MongoDB Compass - Versión 1.40.4 ([https://www.mongodb.com/es/products/compass](https://www.mongodb.com/es/products/compass))

### Alumno: Rubén Seco

### Comisión: 181806
