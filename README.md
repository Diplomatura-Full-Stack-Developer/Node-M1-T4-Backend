# Diplomatura en Profesional Full-Stack Developer

## Curso de desarrollo con Node JS - Profesor: Gabriel Alberini

### Módulo 1: Node JS

### Unidad 4: Integración Front-Back

### Tarea 4: Conectando mi frontend con la API y desplegando.

### Objetivos:

Conectar un frontend (React o Angular) a un backend en Express.

Realizar peticiones reales y preparar ambos entornos para despliegue.

### Consideraciones:

- Se establece una organización de archivos por funcionalidad o dominio de negocio. Las funcionalidades son las de productos y usuarios.

- Se genera una conexion con una base de datos MongoDB.

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
