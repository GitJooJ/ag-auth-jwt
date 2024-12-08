const app = require('./app');
const sequelize = require('./config/database');
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    console.log('Attempting to connect to the database...');
    await sequelize.authenticate();
    console.log('Database connected successfully!');
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
