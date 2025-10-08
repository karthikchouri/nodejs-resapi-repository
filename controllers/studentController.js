const Student = require('../models/studentModel');

exports.getAll = async (req, res) => {
  const [students] = await Student.getAllStudents();
  res.json(students);
};

exports.getById = async (req, res) => {
  const [student] = await Student.getStudentById(req.params.id);
  res.json(student[0]);
};

exports.create = async (req, res) => {
  await Student.createStudent(req.body);
  res.status(201).json({ message: 'Student created' });
};

exports.update = async (req, res) => {
  await Student.updateStudent(req.params.id, req.body);
  res.json({ message: 'Student updated' });
};

exports.delete = async (req, res) => {
  await Student.deleteStudent(req.params.id);
  res.json({ message: 'Student deleted' });
};