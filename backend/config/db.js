const mongoose = require('mongoose');

const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    const { host } = connection.connection;
    console.log(`Mongo DB connected to: ${host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect;
