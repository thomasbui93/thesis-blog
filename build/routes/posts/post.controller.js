"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Post = _interopRequire(require("./post.model"));

var Category = _interopRequire(require("../categories/category.model"));

var _eventsConfig = require("../../events/config");

var prefix = _eventsConfig.prefix;
var POST = _eventsConfig.POST;
var CATEGORY = _eventsConfig.CATEGORY;

var redisClient = _interopRequire(require("../../config/redis"));

var eventEmitterInstance = _interopRequire(require("../../events/events"));

var index = function (req, res, next) {

    Post.find({}).populate("category").exec(function (error, posts) {
        if (error) {
            return next(error);
        }
        if (!posts) {
            return next(error);
        }
        res.json(posts);
    });
};

var showBriefs = function (req, res, next) {
    Post.find({}).limit(5).sort({ createdAt: -1 }).select({ content: 0, keywords: 0 }).populate("category").exec(function (error, posts) {
        if (error) {
            return next(error);
        }
        if (!posts) {
            return next(error);
        }
        res.json(posts);
    });
};

var update = function (req, res, next) {
    var id = req.params.postId;

    Post.findById(id).populate("category").exec(function (error, post) {
        if (error) return next(error);
        if (!post) return next(error);

        post.update(req.body, { runValidators: true, context: "query" }, function (error, pos) {
            if (error) return next(error);
            res.json(pos);
        });
    });
};

var create = function (req, res, next) {
    var newPost = new Post(req.body);

    newPost.save(function (error, post) {
        if (error) return next(error);

        res.status(201).json(post);
    });
};

var remove = function (req, res, next) {
    var id = req.params.postId;

    Post.findById(id).exec(function (error, post) {
        if (error) return next(error);
        if (!post) return next(error);

        post.remove(function (error) {
            if (error) return next(error);

            res.status(204).end();
        });
    });
};

var getOne = function (req, res, next) {
    var id = req.params.postId;
    redisClient.get(prefix.post + id, function (error, postJSON) {
        if (postJSON) {
            console.log("from cache post");
            return res.json(JSON.parse(postJSON));
        } else {
            Post.findOne({ slug: id }).populate("category").exec(function (error, post) {
                if (error) {
                    return next(error);
                } else if (post === null) {
                    return res.status(404).json({
                        msg: "404"
                    });
                } else {
                    eventEmitterInstance.emit(POST.VISITED, post);
                    res.json(post);
                }
            });
        }
    });
};

var getCategoryPost = function (req, res, next) {
    var slug = req.params.categorySlug;

    redisClient.get(prefix.category + slug, function (error, postList) {
        if (postList) {
            console.log("from cache category");
            return res.json(JSON.parse(postList));
        } else {
            Category.findOne({ url: slug }).exec(function (error, category) {
                if (error) {
                    return next(error);
                }
                if (category === null) {
                    res.status(404).json({
                        msg: "404"
                    });
                } else {
                    Post.find({ category: category._id }).populate("category").exec(function (error, posts) {
                        if (error) {
                            return next(error);
                        }
                        if (!posts) {
                            return next(error);
                        }
                        eventEmitterInstance.emit(CATEGORY.VISITED, posts, slug);
                        res.json(posts);
                    });
                }
            });
        }
    });
};

exports.index = index;
exports.showBriefs = showBriefs;
exports.update = update;
exports.create = create;
exports.remove = remove;
exports.getOne = getOne;
exports.getCategoryPost = getCategoryPost;