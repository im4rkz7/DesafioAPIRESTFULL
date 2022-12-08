# API RESTful

Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:

- GET '/api/productos' -> devuelve todos los productos.
- GET '/api/productos/:id' -> devuelve un producto según su id.
- POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
- PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
- DELETE '/api/productos/:id' -> elimina un producto según su id.

Cada producto estará representado por un objeto con el siguiente formato:

```json
{
  "title": "Escuadra",
  "price": 123.45,
  "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
}
```

Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.

## Aclaraciones

- Para el caso de que un producto no exista, se devolverá el objeto:

```json
{
  "error": "producto no encontrado"
}
```

- Utilizar un array como soporte de persistencia en memoria.
- Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
- Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
- El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
- Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.

## Funciones auxiliares

- idValid() - Valida que el id recibido sea un número, también que sea mayor a 0 y menor o igual a la longitud del array de productos.
- updateId() - Actualiza los id del array de productos.
