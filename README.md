# 📋 API de Gestión de Tareas

Bienvenido a la **API de Gestión de Tareas** desarrollada en **Node.js** y **Express**, desplegada en **Vercel**.

🔗 **Enlace de la API desplegada en Vercel:**  
👉 [https://task-api-git-main-wilkin369s-projects.vercel.app](https://task-api-git-main-wilkin369s-projects.vercel.app)

---

## 📌 Descripción

Esta API permite gestionar una lista sencilla de tareas que se almacena en memoria. Las operaciones que puedes realizar son:

✅ Agregar tareas  
✅ Listar todas las tareas  
✅ Actualizar tareas existentes  
✅ Eliminar tareas

---

## 🚀 Endpoints disponibles

| Método | Ruta                  | Descripción                         |
|--------|-----------------------|-------------------------------------|
| GET    | `/`                   | Verificación de que la API funciona |
| GET    | `/tasks`              | Obtiene todas las tareas            |
| POST   | `/tasks`              | Agrega una nueva tarea              |
| PUT    | `/tasks/:id`          | Actualiza una tarea por índice      |
| DELETE | `/tasks/:id`          | Elimina una tarea por índice        |

---

## 🔨 Cómo usar la API

Puedes probar la API desde Postman, Insomnia o cualquier cliente HTTP. Aquí te dejo ejemplos para cada endpoint:

---

### 1. Verificar que la API funciona

GET https://task-api-git-main-wilkin369s-projects.vercel.app/

Respuesta esperada:
API de gestión de tareas funcionando ✅

### 2. Obtener todas las tareas

GET https://task-api-git-main-wilkin369s-projects.vercel.app/tasks

🔸 Respuesta ejemplo:
```json
[
  "Estudiar Node.js",
  "Revisar código"
]


### 3. Agregar una nueva tarea

POST https://task-api-git-main-wilkin369s-projects.vercel.app/tasks
🔸 Body (JSON):
{
  "task": "Leer documentación de Express"
}
🔸 Respuesta ejemplo:

{
  "message": "Tarea \"Leer documentación de Express\" agregada.",
  "tasks": [
    "Estudiar Node.js",
    "Revisar código",
    "Leer documentación de Express"
  ]
}


### 4. Actualizar tarea
PUT https://task-api-git-main-wilkin369s-projects.vercel.app/tasks/0
🔸 Body (JSON):

{
  "newTask": "Aprender MongoDB"
}

🔸 Respuesta ejemplo:
{
  "message": "Tarea actualizada a \"Aprender MongoDB\".",
  "tasks": [
    "Aprender MongoDB",
    "Revisar código"
  ]
}

### 5. Eliminar una tarea

DELETE https://task-api-git-main-wilkin369s-projects.vercel.app/tasks/1

🔸 Respuesta ejemplo:
{
  "message": "Tarea \"Revisar código\" eliminada.",
  "tasks": [
    "Aprender MongoDB"
  ]
}



### Estructura del proyecto
/api
  └── index.js
/vercel.json
package.json
README.md


### Notas importantes
La API guarda los datos en memoria, por lo que si el servidor se reinicia o se vuelve a desplegar, las tareas se pierden.

Si deseas implementar almacenamiento permanente, se puede integrar una base de datos como MongoDB o incluso un archivo JSON.