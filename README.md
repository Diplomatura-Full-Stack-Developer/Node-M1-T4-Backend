# Diplomatura en Profesional Full-Stack Developer

## Curso de desarrollo con Node JS - Profesor: Gabriel Alberini

### Módulo 1: Node JS

### Unidad 4: Integración Front-Back

### Tarea 4: Conectando mi frontend con la API y desplegando.

### Objetivos:

Conectar un frontend (React o Angular) a un backend en Express.

Realizar peticiones reales y preparar ambos entornos para despliegue.

### Consideraciones del backend:

No se pretende desarrollar una aplicación completa, sino establecer algunas funcionalidades que se aprendieron durante el curso y a los fines de cumplir con las consignas de la tarea.<br>

- Se establece una organización de archivos por funcionalidad o dominio de negocio. Las funcionalidades son las de productos, usuarios y carrito.<br>
- Se genera una conexion con una base de datos MongoDB.<br>
- En el esquema del carrito no se repiten los datos del producto, sino que se crea una relación entre el carrito y los productos cargados y entre el carrito y el usuario. De esta forma existirá una relación uno a uno entre el carrito y el usuario.<br>
- Las imagenes de los productos se mantienen como datos estàticos a los fines de simplificar el proyecto. En caso que se quiera cargar imagenes de forma dinámica es conveniente guardar esas imagenes en un servidor como por ejemplo **Cloudinary**.<br>
- Se realiza el despliegue para producción en Render. En Render se configuran las variables de entorno para que se pueda conectar a la base de datos de MongoDB.<br>
- Para que la aplicación pueda correr en el navegador es necesaria la configuración del **CORS**.

```javascript
app.use(
  cors({
    origin: ['https://angular-m1-t4.web.app', 'http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);
```

- Los passwords que generan los clientes se cifran con **bcrypt** para mayor seguridad.

### Pasos para la ejecución local:

1. Clonar el repositorio:

```bash
git clone https://github.com/Diplomatura-Full-Stack-Developer/Node-M1-T4
```

2. Instalar las dependencias.

```bash
npm install
```

3. Ejecutar el script de la aplicación en modo desarrollo.

```bash
npm run dev
```

### Recursos utilizados:

- Node JS - Versión 24.20.0 ([https://nodejs.org/es/download/](https://nodejs.org/es/download/))
- Npm - Versión 12.0.2 (instalado por defecto con Node JS)
- Express - Versión 5.3.0 ([https://www.npmjs.com/package/express](https://www.npmjs.com/package/express))
- Mongoose - Versión 9.11.3 ([https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose))
- MongoDB Compass - Versión 1.40.4 ([https://www.mongodb.com/es/products/compass](https://www.mongodb.com/es/products/compass))
- Cors - Versión 2.8.6 ([https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors))
- Bcrypt - Versión 6.0.0 ([https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt))

### Alumno: Rubén Seco

### Comisión: 181806
