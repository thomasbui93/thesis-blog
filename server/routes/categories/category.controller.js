const Category =  require('./category.model');

exports.index = (req, res, next)=> {

    Category.find({})
        .exec((error, cats)=>{
            if(error){
                return next(error);
            }
            if(!cats){
                return next(error);
            }
            res.json(cats);
        })
}

exports.update = (req, res, next)=>{
    let id = req.params.categoryId;

    Category.findById(id)
        .exec((error, cat)=>{
            if(error) return next(error);
            if(!cat) return next(error);

            cat.update(req.body, { runValidators: true, context: 'query' }, (err, category)=> {

                if(err) {
                    res.json({ error: 'Validation error' });
                }else {
                    res.json(category);
                }

            });
        });
}

exports.create = (req, res, next)=>{
    let newCat = new Category(req.body);

    newCat.save((error, cat)=>{

        if(error) {
            res.send(error);
        }
        res.status(201).json(cat);
    });
}

exports.remove = (req, res, next)=>{
    let id = req.params.categoryId;

    Category.findById(id)
        .exec((error, cat)=>{
            if(error) return next(error);
            if(!cat) return next(error);

            cat.remove((error)=>{
                if(error) return next(error);

                res.status(204).end();
            });
        });
}

exports.getOne = (req, res, next)=>{
    let id = req.params.categoryId;

    Category.findById(id)
        .exec((error, cat)=>{
            if(error) return next(error);
            if(!cat) return next(error);

            res.json(cat);
        });
}

