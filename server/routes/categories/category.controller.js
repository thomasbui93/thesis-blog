import Category from './category.model';

const index = (req, res, next)=> {

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

const update = (req, res, next)=>{
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

const create = (req, res, next)=>{
    let newCat = new Category(req.body);

    newCat.save((error, cat)=>{

        if(error) {
            res.send(error);
        }
        res.status(201).json(cat);
    });
}

const remove = (req, res, next)=>{
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

const getOne = (req, res, next)=>{
    let id = req.params.categoryId;

    Category.findById(id)
        .exec((error, cat)=>{
            if(error) return next(error);
            if(!cat) return next(error);

            res.json(cat);
        });
}


export { index, update, create, remove, getOne } ;
