"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Category = _interopRequire(require("./category.model"));

var index = function (req, res, next) {

    Category.find({}).exec(function (error, cats) {
        if (error) {
            return next(error);
        }
        if (!cats) {
            return next(error);
        }
        res.json(cats);
    });
};

var update = function (req, res, next) {
    var id = req.params.categoryId;

    Category.findById(id).exec(function (error, cat) {
        if (error) return next(error);
        if (!cat) return next(error);

        cat.update(req.body, { runValidators: true, context: "query" }, function (err, category) {

            if (err) {
                res.json({ error: "Validation error" });
            } else {
                res.json(category);
            }
        });
    });
};

var create = function (req, res, next) {
    var newCat = new Category(req.body);

    newCat.save(function (error, cat) {

        if (error) {
            res.send(error);
        }
        res.status(201).json(cat);
    });
};

var remove = function (req, res, next) {
    var id = req.params.categoryId;

    Category.findById(id).exec(function (error, cat) {
        if (error) return next(error);
        if (!cat) return next(error);

        cat.remove(function (error) {
            if (error) return next(error);

            res.status(204).end();
        });
    });
};

var getOne = function (req, res, next) {
    var id = req.params.categoryId;

    Category.findById(id).exec(function (error, cat) {
        if (error) return next(error);
        if (!cat) return next(error);

        res.json(cat);
    });
};

exports.index = index;
exports.update = update;
exports.create = create;
exports.remove = remove;
exports.getOne = getOne;
//# sourceMappingURL=category.controller.js.map