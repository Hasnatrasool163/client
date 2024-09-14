const db = require('../db');

exports.postAssignment = async (req, res) => {
  const { title, description, deadline } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO assignments (title, description, deadline) VALUES (?, ?, ?)',
      [title, description, deadline]
    );

    res.status(201).json({ message: 'Assignment posted successfully', assignmentId: result[0].insertId });
  } catch (error) {
    console.error('Error posting assignment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const [assignments] = await db.query('SELECT * FROM assignments');
    res.status(200).json(assignments);
  } catch (error) {
    console.error('Error fetching assignments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};