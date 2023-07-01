/* eslint-disable no-console */
const repl = require("repl");
const path = require("path");
const requireAll = require("require-all");
const sequelize = require("./config/sequelize");

const models = requireAll({
  dirname: path.join(__dirname, "models"),
  filter: /^(.+)\.(js|ts)$/,
});

const printDataValues = (instances) => {
  instances.forEach(({ dataValues }) => console.log(dataValues));
};

const findAllAndPrint = (model, where = {}, attributes = []) => {
  const options = { where };
  if (attributes.length > 0) {
    options.attributes = attributes;
  }
  return model.findAll(options).then(printDataValues);
};

const findByIdAndPrint = async (model, id) => {
  const instance = await model.findByPk(id);
  console.log(instance && instance.dataValues);
};

const createAndPrint = async (model, data) => {
  const instance = await model.create(data);
  console.log(instance.dataValues);
};

const updateByIdAndPrint = async (model, id, data) => {
  const [rows] = await model.update(data, { where: { id } });
  console.log(`${rows} rows updated.`);
};

const deleteByIdAndPrint = async (model, id) => {
  const rows = await model.destroy({ where: { id } });
  console.log(`${rows} rows deleted.`);
};

const countRecords = async (model, { where = {} } = {}) => {
  const count = await model.count({ where });
  console.log(`Number of records: ${count}`);
};

const replServer = repl.start({
  prompt: "node-console > ",
  useColors: true,
});

// Attach Sequelize instance, models, and utility functions to the REPL context
replServer.context.sequelize = sequelize;
replServer.context.models = models;
replServer.context.findAllAndPrint = findAllAndPrint;
replServer.context.findByIdAndPrint = findByIdAndPrint;
replServer.context.createAndPrint = createAndPrint;
replServer.context.updateByIdAndPrint = updateByIdAndPrint;
replServer.context.deleteByIdAndPrint = deleteByIdAndPrint;
replServer.context.countRecords = countRecords;

console.log("Node.js console with Sequelize. Type .exit to quit.");

// Example commands:
//
// To find all users and print their dataValues:
// > findAllAndPrint(models.index.User)
// > findAllAndPrint(models.index.User, {name: 'ABC'}, ['id', 'name'])
//
// To find a user by ID and print its dataValues:
// > findByIdAndPrint(models.index.User, 1)
//
// To create a new user and print its dataValues:
// > createAndPrint(
// models.index.User,
// { name: 'John Doe', email: 'john.doe@example.com'}
// )
//
// To update a user by ID and print the number of rows updated:
// > updateByIdAndPrint(models.index.User, 1, { name: 'Jane Smith' })
//
// To delete a user by ID and print the number of rows deleted:
// > deleteByIdAndPrint(models.index.User, 1)
//
// To count the number of users:
// > countRecords(models.index.User)
