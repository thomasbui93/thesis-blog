"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Post = _interopRequire(require("./post.model"));

var Category = _interopRequire(require("../categories/category.model"));

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
    Post.findOne({ slug: id }).populate("category").exec(function (error, post) {
        if (error) return next(error);
        if (!post) return next(error);

        res.json(post);
    });
    /*if( id.length > 24){
        // for slug
        Post.findOne({ slug: id})
            .populate('category')
            .exec((error, post)=>{
                if(error) return next(error);
                if(!post) return next(error);
                 res.json(post);
            });
    }
    Post.findById(id)
        .populate('category')
        .exec((error, post)=>{
            if(error) return next(error);
            if(!post) return next(error);
             res.json(post);
        });
        */
};

var getCategoryPost = function (req, res, next) {
    var slug = req.params.categorySlug;
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
                res.json(posts);
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
//# sourceMappingURL=post.controller.js.map