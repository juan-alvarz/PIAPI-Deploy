const sayHello = async (req, res) => {
  return res.status(200).json({ message: "Hola" });
};

module.exports = {
  sayHello,
};
