import Post from './post.model';
import Category from '../categories/category.model';
import {prefix} from '../../events/config';

import { createClient as redisClient } from 'redis';

const index = (req, res, next)=> {

    Post.find({})
        .populate('category')
        .exec((error, posts)=>{
        if(error){
            return next(error);
        }
        if(!posts){
            return next(error);
        }
        res.json(posts);
    })
}

const showBriefs = (req, res, next) => {
    Post.find({})
        .limit( 5 )
        .sort( { createdAt: -1})
        .select({ content: 0, keywords: 0})
        .populate('category')
        .exec((error, posts)=>{
            if(error){
                return next(error);
            }
            if(!posts){
                return next(error);
            }
            res.json(posts);
        });
}

const update = (req, res, next)=>{
    let id = req.params.postId;

    Post.findById(id)
        .populate('category')
        .exec((error, post)=>{
            if(error) return next(error);
            if(!post) return next(error);

            post.update(req.body, { runValidators: true, context: 'query' }, (error, pos)=> {
                if(error) return next(error);
                res.json(pos);
            });
        });
}

const create = (req, res, next)=>{
    let newPost = new Post(req.body);

    newPost.save((error, post)=>{
        if(error) return next(error);

        res.status(201).json(post);
    });
}

const remove = (req, res, next)=>{
    let id = req.params.postId;

    Post.findById(id)
        .exec((error, post)=>{
            if(error) return next(error);
            if(!post) return next(error);

            post.remove((error)=>{
                if(error) return next(error);

                res.status(204).end();
            });
        });
}

const getOne = (req, res, next)=>{
    const id = req.params.postId;
    redisClient.get(id, (error, postJSON)=>{
        if(postJSON){
            res.json(JSON.parse(postJSON));
        }

        Post.findOne({ slug: id})
            .populate('category')
            .exec((error, post)=>{
                if(error) return next(error);
                if(!post) return next(error);

                res.json(post);
            });
    });

}

const getCategoryPost = (req, res, next)=>{
    const slug = req.params.categorySlug;

    redisClient.get(prefix+slug, (error, postList)=>{
        if(postList){
            res.json(JSON.parse(postList));
        }

        Category.findOne({url: slug}).exec((error,category)=>{
            if(error){
                return next(error);
            }
            if(category === null){
                res.status(404).json({
                    msg: '404'
                });
            }else {
                Post.find({category: category._id})
                    .populate('category')
                    .exec((error, posts)=>{
                        if(error){
                            return next(error);
                        }
                        if(!posts){
                            return next(error);
                        }
                        redisClient.set(prefix+slug, JSON.stringify(posts));
                        res.json(posts);
                    })
            }

        });
    });
}

export { index, showBriefs, update, create, remove, getOne, getCategoryPost } ;