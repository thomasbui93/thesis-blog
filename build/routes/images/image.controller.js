"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Upload = _interopRequire(require("upload-file"));

var Image = _interopRequire(require("./image.model"));

var fs = _interopRequire(require("fs"));

var path = _interopRequire(require("path"));

var create = function (req, res, next) {
    var upload = new Upload({
        dest: "public/images",
        maxFileSize: 100 * 1024,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        rename: function rename(name, file) {
            var extension = file.filename.split(".").pop();
            var fileName = new Buffer(new Date().toTimeString()).toString("base64");
            return fileName + "." + extension;
        }
    });

    upload.on("end", function (fields, files) {
        var filePath = "";

        for (var fileData in files) {
            filePath = "/images/" + files[fileData].filename;
        }
        Image.create({ url: filePath }, function (error, image) {
            if (error) return next(error);

            res.status(201).json(image);
        });
    });

    upload.on("error", function (err) {
        res.send(err);
    });

    upload.parse(req);
};

var getAll = function (req, res, next) {
    Image.find({}).exec(function (error, images) {
        if (error) {
            return next(error);
        }
        if (!images) {
            return next(error);
        }
        res.json(images);
    });
};

var update = function (req, res, next) {
    var imageId = req.params.imageId;
    console.log(imageId);

    Image.findById(imageId).exec(function (error, image) {
        if (error) return next(error);
        if (!image) return next(error);

        if (req.body.caption !== null && req.body.caption !== undefined) {
            image.update(req.body, function (err, img) {
                if (err) {
                    res.statusCode = 400;
                    res.send({ error: "Validation error" });
                }
                res.json(img);
            });
        } else {
            return next();
        }
    });
};

var remove = function (req, res, next) {
    var imageId = req.params.imageId;

    Image.findById(imageId).exec(function (error, image) {
        if (error) return next(error);
        if (!image) return next(error);
        var imageUrl = path.dirname(require.main.filename) + "/public" + image.url;

        image.remove(function (error) {
            if (error) return next(error);
            fs.unlink(imageUrl, function (err) {
                if (err) return next(err);
                res.status(204).end();
            });
        });
    });
};
exports.create = create;
exports.getAll = getAll;
exports.update = update;
exports.remove = remove;
//# sourceMappingURL=image.controller.js.map