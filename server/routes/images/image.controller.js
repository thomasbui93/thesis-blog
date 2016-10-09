import Upload from 'upload-file';
import Image from './image.model';
import fs from 'fs';
import path from 'path';

const create = (req, res, next)=> {
    var upload = new Upload({
        dest: 'public/images',
        maxFileSize: 100 * 1024,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        rename: function(name, file) {
            const extension = file.filename.split('.').pop();
            let fileName = new Buffer(new Date().toTimeString()).toString('base64');
            return fileName+'.'+extension;
        }
    });

    upload.on('end', function(fields, files) {
        var filePath = '';

        for (var fileData in files) {
            filePath = '/images/'+files[fileData].filename;
        }
        Image.create({url: filePath}, (error, image)=>{
            if(error) return next(error);

            res.status(201).json(image);
        })

    });

    upload.on('error', function(err) {
        res.send(err);
    });

    upload.parse(req);

}

const getAll = (req, res, next)=>{
    Image.find({})
        .exec((error, images)=>{
        if(error){
            return next(error);
        }
        if(!images){
            return next(error);
        }
        res.json(images);
    })
}

const update = (req, res, next)=>{
    const imageId = req.params.imageId;
    console.log(imageId);

    Image.findById(imageId)
        .exec((error, image)=>{
            if(error) return next(error);
            if(!image) return next(error);

            if(req.body.caption !== null && req.body.caption !== undefined){
                image.update(req.body, (err, img)=>{
                    if(err) {
                        res.statusCode = 400;
                        res.send({ error: 'Validation error' });
                    }
                    res.json(img);
                })
            }else {
                return next();
            }


        });
}

const  remove = (req, res, next)=>{
    const imageId = req.params.imageId;

    Image.findById(imageId)
        .exec((error, image)=>{
            if(error) return next(error);
            if(!image) return next(error);
            const imageUrl = path.dirname(require.main.filename)+'/public'+ image.url;

            image.remove((error)=>{
                if(error) return next(error);
                fs.unlink(imageUrl, (err)=>{
                    if(err) return next(err);
                    res.status(204).end();
                })
            })
        });
}
export { create, getAll, update, remove };