# api-React:
<h2>
  2 proyectos distintos<br>
  <pre>1. Rama Api -> Backend: “API”</pre><br>
  <pre>2. reactfront ->FrontEnd: “reactfront”</pre>
</h2>
<h3>1. Backend: “API”</h3>
<ul>
  <li><b>Requisitos:</b></li>
</ul>
<ol>
  <li>Laravel 9</li>
  <li>Localhost con php 8</li>
  <li>Localhost mysql</li>
</ol>
<ul>
  <li><b>Instalación:</b></li>
</ul>
<ol>
  <li>Acceder al gestor de datos de mysql (en este caso phpmyadmin) y crear la bbdd “api_db” con codificación utf8_spanish2_ci</li>
  <li>Acceder a la carpeta del proyecto “Api” ejecutar el cmd (o powershell) y usar el comando “php artisan migrate” para realizar la creación de las tablas</li>
  <li>En la misma ruta ejecutar le comado “php artisan db:seed --class=ProductSeeder” para insertar valores de ejemplo, después de eso deberíamos tener en la tabla “products” 5 productos de pruebal</li>
</ol>
<ul>
  <li><b>Endpoint:</b></li>
</ul>
<ol>
  <li><b>Obtener todos los productos (GET):</b> http://localhost:<YOU_PORT>/api/products</li>
  <li><b>Añadir un producto (POST):</b> http://localhost:<YOU_PORT>/api/product</li>
  <li><b>Obtener un producto (GET):</b> http://localhost:<YOU_PORT>/api/products/{id}</li>
  <li><b>Editar un producto (PUT):</b> http://localhost:<YOU_PORT>/api/product/{id}</li>
  <li><b>Eliminar un producto (DELETE):</b> http://localhost:<YOU_PORT>/api/product/{id}}</li>
</ol>
<h3>2. FrontEnd: “reactfront”</h3>
<ul>
  <li><b>Requisitos:</b></li>
</ul>
<ol>
  <li>React ^18.2.0</li>
  <li>Tener funcionado la “Api” del punto de backend</li>
  <li>Tener funcionado el localhost del punto anterior</li>
</ol>
<ul>
  <li><b>Instalación:</b></li>
</ul>
<ol>
  <li>Acceder la carpeta “ReactFront” y ejecutar “npm start”</li>
  <li>Acceder al localhost http://localhost: <YOU_PORT>/</li>
</ol>
<table>
  <thead>
    <th>Boton</th>
    <th>Funcionalidad</th>
    <th>Campo</th>
  </thead>
  <tbody>
    <tr>
      <td>Create</td>
      <td>Permite añadir un nuevo producto</td>
      <td>Description<br>Precio<br>Stock<br></td>
    </tr>
    <tr>
      <td>Edit</td>
      <td>Permite editar un producto	Description</td>
      <td>Description<br>Precio<br>Stock<br></td>
    </tr>
    <tr>
      <td>Delete</td>
      <td>Permite eliminar un producto</td>
      <td>x</td>
    </tr>
  </tbody>
</table>
