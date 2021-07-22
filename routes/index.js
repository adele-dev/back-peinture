const paintingsRouter = require("./paintings");

module.exports = (app) => {
  app.use("/api/paintings", paintingsRouter);
};
