import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import serverConfig  from './config';
import compression from 'compression';



const isDeveloping = process.argv[2] !== '--production';
const port = isDeveloping ? 3000 : process.argv[3];
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression({ threshold: 0 }));
//database config
mongoose.connect(serverConfig.database.mongodb.uri, serverConfig.database.mongodb.options);
//config routes

import routes from './routes';
routes(app);
//end config routes

if (isDeveloping) {
  let webpack = require('webpack');
  let webpackMiddleware = require('webpack-dev-middleware');
  let webpackHotMiddleware= require('webpack-hot-middleware');
  let config =require('../webpack.config.js');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
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

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
    res.end();
  });
  app.use(express.static(path.resolve(__dirname, '../public')));


} else {
  app.use(express.static(path.resolve(__dirname, '../public')));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});