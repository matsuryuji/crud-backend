const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  nome: {
    required: true,
    type: String,
  },
  telefone: {
    required: true,
    type: Number,
  },
  email: {
    required: true,
    type: String,
  },
  cpf: {
    required: true,
    type: String,
  },
  placaCarro: {
    required: true,
    type: String,
  },
  numero: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Data", dataSchema);
