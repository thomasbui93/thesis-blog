"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var path = _interopRequire(require("path"));

var express = _interopRequire(require("express"));

var mongoose = _interopRequire(require("mongoose"));

var bodyParser = _interopRequire(require("body-parser"));

var serverConfig = _interopRequire(require("./config"));

var compression = _interopRequire(require("compression"));

var isDeveloping = process.argv[2] !== "--production";
var port = isDeveloping ? 3000 : process.argv[3];
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression({ threshold: 0 }));
//mongodb config
mongoose.connect(serverConfig.database.mongodb.uri, serverConfig.database.mongodb.options);

//config routes

var routes = _interopRequire(require("./routes"));

routes(app);
//end config routes

if (isDeveloping) {
  (function () {
    var webpack = require("webpack");
    var webpackMiddleware = require("webpack-dev-middleware");
    var webpackHotMiddleware = require("webpack-hot-middleware");
    var config = require("../webpack.config.js");
    var compiler = webpack(config);
    var middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: "src",
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    //end webpack configuration.

    app.get("*", function response(req, res) {
      res.write(middleware.fileSystem.readFileSync(path.join(__dirname, "public/index.html")));
      res.end();
    });
    app.use(express["static"](path.resolve(__dirname, "../public")));
  })();
} else {
  app.use(express["static"](path.resolve(__dirname, "../public")));
  app.get("*", function response(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}
app.listen(port, "0.0.0.0", function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.", port, port);
});
//# sourceMappingURL=index.js.map