const db = require('../config/db');

exports.getAllStudents = () => {
  return db.query('SELECT * FROM students');
};

exports.getStudentById = (id) => {
  return db.query('SELECT * FROM students WHERE id = ?', [id]);
};

exports.createStudent = (student) => {
  return db.query('INSERT INTO students (name, email, age) VALUES (?, ?, ?)', [student.name, student.email, student.age]);
};

exports.updateStudent = (id, student) => {
  return db.query('UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?', [student.name, student.email, student.age, id]);
};

exports.deleteStudent = (id) => {
  return db.query('DELETE FROM students WHERE id = ?', [id]);
};