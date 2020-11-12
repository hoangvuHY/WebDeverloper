// Using Node.js `require()`
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/temp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => {
  console.log('connect db success');
});
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  valueX: Number,
  valueY: Number
}, { collection: 'data' });
const dataModel = mongoose.model('data', dataSchema);

module.exports = dataModel;