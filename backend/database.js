const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "inventario.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("Error al abrir BD:", err);
  else console.log("Base de datos conectada ->", dbPath);
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS productos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      cantidad REAL NOT NULL,
      precio REAL NOT NULL
    )
  `);
});

module.exports = db;
