
# ITS Backend - Proyecto Final

##INTEGRANTES DEL PROYECTO: TESTASEACA CRISTIAN  - CAPORASO MANUEL

Este es el trabajo práctico final de la materia **Programación Backend** de la **Tecnicatura en Desarrollo de Software** del **Instituto Técnico Superior Cipolletti**. La aplicación es una API backend que permite realizar diferentes operaciones HTTP, cuenta con autenticación y roles, y está documentada con Swagger.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas antes de comenzar:

- [Node.js](https://nodejs.org) (versión 16 o superior recomendada)
- [Git](https://git-scm.com/)
- Un sistema gestor de bases de datos compatible (como MySQL, PostgreSQL, etc.)

---

## Pasos para hacer funcionar la aplicación

1. **Clonar el repositorio**  
   Ejecuta el siguiente comando en tu terminal para clonar el repositorio en tu máquina local:  
   ```bash
   git clone https://github.com/dzCazador/ITS-Backend-ProyectoFinal.git
   ```

2. **Instalar las dependencias**  
   Ingresa al directorio del proyecto y ejecuta:  
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno**  
   Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env_template`.  
   Formato del `.env` esperado:  
   ```plaintext
   db_dialect://db_user:db_pass@db_host:db_port/db_name
   ```
   Asegúrate de reemplazar los valores con la configuración de tu base de datos.

4. **Migrar la base de datos**  
   Aplica la última versión de las migraciones con el siguiente comando:  
   ```bash
   npx prisma migrate dev --name <NOMBRE_MIGRACION>
   ```
   Reemplaza `<NOMBRE_MIGRACION>` con un nombre significativo para la migración.

5. **Iniciar la aplicación**  
   Ejecuta el siguiente comando para iniciar la aplicación en modo desarrollo:  
   ```bash
   npm run start:dev
   ```

6. **Acceder a la documentación**  
   Una vez que la aplicación esté en ejecución, abre tu navegador y accede a:  
   ```
   http://localhost:3000/api
   ```
   Aquí encontrarás la documentación interactiva generada con **Swagger**, que describe todas las rutas disponibles.

---

## Uso de la aplicación

### 1. Crear un usuario
Sigue las instrucciones de la documentación Swagger para enviar una solicitud POST y crear un usuario.

### 2. Hacer login
Usa el endpoint correspondiente para autenticarte con las credenciales del usuario creado.

### 3. Usar las peticiones HTTP
Con el token de autenticación, podrás realizar las operaciones disponibles según el rol asignado a tu usuario (`user`, `admin`, `superadmin`).

---

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **NestJS**: Framework para construir aplicaciones backend escalables.
- **Prisma**: ORM para manejar la base de datos.
- **Swagger**: Herramienta para documentar la API.

---

## Contacto

Si tenes preguntas sobre este proyecto, no dudes en comunicarte con el equipo del proyecto.
