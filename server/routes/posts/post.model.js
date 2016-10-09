import mongoose, { Schema } from 'mongoose';
import { meta } from '../../config';

let PostSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
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
        default: false
    }
});

PostSchema.pre('save', function (next) {
    const now = new Date();

    this.slug = this.title.split(' ').join('-') +"--"+ now.valueOf();

    if(this.thumbnailImage === undefined || this.thumbnailImage === null){

        const regexImage = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;

        let results = regexImage.exec(this.content);

        if(results){
            this.thumbnailImage = results[0];
        }else {
            this.thumbnailImage = meta.defaultImage;
        }
    }
    next();
});

export default mongoose.model('Post', PostSchema);
