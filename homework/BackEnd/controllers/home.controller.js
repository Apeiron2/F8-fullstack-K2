var DeviceDetector = require("device-detector-js");
module.exports = {
  // index: (req, res, next) => {
  //   const deviceDetector = new DeviceDetector();
  //   const { device } = deviceDetector.parse(req.headers["user-agent"]);
  //   req.device = device.type;
  //   res.render("index", { req });
  // },
  index: async (req, res) => {
    const param = req.params;
    console.log(param);
  },
};
