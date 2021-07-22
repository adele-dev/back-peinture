const { find, findOne, create } = require("../Models/paintings");

const getPaintings = async (req, res) => {
  console.log("Get paintings");
  const [data] = await find();
  res.json(data);
};

const getOnePainting = async (req, res) => {
  const [data] = await findOne(req.params.id);
  res.json(data[0]);
};

const createPainting = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Painting created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating this painting");
  }
};

module.exports = { getPaintings, getOnePainting, createPainting };
