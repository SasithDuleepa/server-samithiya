const db = require('./../../config/db');

const AddRole = (req,res) => {
  
    const { role_name } = req.body;

    if(!role_name){
        return res.status(400).json({ error: 'Role name is required' });
    }else {
        const sql = `INSERT INTO role (role_name) VALUES (?)`;
        const values = [role_name];
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error adding role:', err);
                return res.status(500).json({ error: 'An error occurred while adding the role' });
            }
            return res.status(200).json({ message: 'Role added successfully' });
        });

}};

module.exports = AddRole