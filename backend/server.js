const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Ping básico
app.get('/', (req, res) => {
  res.send('Servidor backend de sistemas de inventario');
});

// Obtener todos los productos
app.get('/api/productos', (req, res) => {
  db.all('SELECT * FROM productos', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Crear producto
app.post('/api/productos', (req, res) => {
  const { nombre, cantidad, precio } = req.body;
  if (!nombre || cantidad == null || precio == null) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }
  const stmt = db.prepare('INSERT INTO productos (nombre, cantidad, precio) VALUES (?, ?, ?)');
  stmt.run([nombre, cantidad, precio], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID });
  });
});

// Actualizar producto
app.put('/api/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, cantidad, precio } = req.body;
  db.run(
    'UPDATE productos SET nombre = ?, cantidad = ?, precio = ? WHERE id = ?',
    [nombre, cantidad, precio, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'No encontrado' });
      res.json({ updated: this.changes });
    }
  );
});

// Eliminar producto
app.delete('/api/productos/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM productos WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json({ deleted: this.changes });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
