import request from 'superagent';
import localStorage from 'localforage';

const getAll = ()=>{
    return new Promise((resolve, reject)=>{
        request.get('/api/categories')
        .end((error, response)=>{
            if(error) reject(error);

            resolve(JSON.parse(response.text));
        })
    });
}
const create = (category)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=>{
            Object.assign(category, category, {token: token});
            request.post('/api/categories/')
                .set('content-type', 'application/x-www-form-urlencoded' )
                .send(category)
                .end((error, response)=>{
                    const res = JSON.parse(response.text);
                    if(res.errors) reject(res.errors);
                    resolve(res);
                })
        });
    });
}
const update = (category)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=>{
            Object.assign(category, category, {token: token});
            request.put('/api/categories/'+category._id)
            .set('content-type', 'application/x-www-form-urlencoded' )
            .send(category)
            .end((error, response)=>{
                if(error) reject(error);
                resolve(JSON.parse(response.text));
            })
        });
    });
}
const remove = (categoryID)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=> {
            request.del('/api/categories/' + categoryID+'?token='+token)
                .end((error, response)=> {
                    if (error) reject(error);
                    resolve(response);
                })
        })
    })
}
export {create, update, remove,getAll};
