const People = require('../models/people');

exports.index = async (req, res, next) => {
  try {
    const people = await People.find();
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const person = await People.findById(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { name, age, hireDate } = req.body;
    const person = await People.create({
      name,
      age,
      hireDate
    });
    res.status(201).json({ message: 'This person was created successfully', status: 'success', person });
  } catch (error) {
    next(error);
  }
}

exports.update = async (req, res, next) => {
  try {
    const { _id, name, age, hiredate } = req.body;
    await People.findOneAndUpdate({ _id }, {
      name,
      age,
      hiredate
    });
    res.status(200).json({ message: 'This person was updated successfully', status: 'success' });
  } catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await People.findOneAndDelete({ _id });
    res.status(200).json({ message: 'this person was deleted successfully', status: 'success' });
  } catch (error) {
    next(error);
  }
}