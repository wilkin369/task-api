// Importar Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API de gestión de tareas funcionando ✅");
});

// Variables y constantes
const tasks = [];
const MAX_TASKS = 5;

// Obtener todas las tareas
app.get("/tasks", (req, res) => {
    res.json({ tasks });
});

// Agregar una tarea
app.post("/tasks", (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).json({ error: "Tarea requerida" });
    if (tasks.length >= MAX_TASKS) {
        return res.status(400).json({ error: "No puedes agregar más tareas. Límite alcanzado." });
    }
    tasks.push(task);
    res.json({ message: `Tarea "${task}" agregada.`, tasks });
});

// Actualizar una tarea
app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { newTask } = req.body;
    const index = parseInt(id);

    if (index < 0 || index >= tasks.length) {
        return res.status(400).json({ error: "Índice inválido." });
    }

    tasks[index] = newTask;
    res.json({ message: `Tarea actualizada a "${newTask}".`, tasks });
});

// Eliminar una tarea
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const index = parseInt(id);

    if (index < 0 || index >= tasks.length) {
        return res.status(400).json({ error: "Índice inválido." });
    }

    const removed = tasks.splice(index, 1);
    res.json({ message: `Tarea "${removed}" eliminada.`, tasks });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Exportar app para despliegue en Vercel
module.exports = app;


