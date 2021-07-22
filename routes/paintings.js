const {
  getPaintings,
  getOnePainting,
  createPainting,
} = require("../Controllers/paintings");
const paintingsRouter = require("express").Router();

paintingsRouter.get("/", getPaintings);
paintingsRouter.get("/:id", getOnePainting);
paintingsRouter.post("/", createPainting);

module.exports = paintingsRouter;
