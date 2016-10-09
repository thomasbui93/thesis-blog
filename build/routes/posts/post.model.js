"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _mongoose = require("mongoose");

var mongoose = _interopRequire(_mongoose);

var Schema = _mongoose.Schema;

var meta = require("../../config").meta;

var eventEmitter = _interopRequire(require("../../events/events"));

var POST = require("../../events/databases/config").POST;

var PostSchema = new Schema({
    createdAt: {
        type: Date,
        "default": Date.now
    },
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    thumbnailImage: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        unique: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    keywords: {
        type: Array,
        option: true
    },
    publish: {
        type: Boolean,
        "default": false
    }
});

PostSchema.pre("save", function (next) {
    var now = new Date();

    this.slug = this.title.split(" ").join("-") + "--" + now.valueOf();

    if (this.thumbnailImage === undefined || this.thumbnailImage === null) {

        var regexImage = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;

        var results = regexImage.exec(this.content);

        if (results) {
            this.thumbnailImage = results[0];
        } else {
            this.thumbnailImage = meta.defaultImage;
        }
    }

    next();
});

PostSchema.post("save", function (doc) {
    "use strict";
    if (undefined.isNew) {
        eventEmitter.emit(POST.NEW, doc);
    } else {
        eventEmitter.emit(POST.UPDATE, doc);
    }
});

PostSchema.post("remove", function (doc) {
    "use strict";
    eventEmitter.emit(POST.REMOVE, doc);
});

module.exports = mongoose.model("Post", PostSchema);