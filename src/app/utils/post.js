import request from 'superagent';
import localStorage from 'localforage';

const getAll = ()=> {
    return new Promise((resolve, reject)=>{
        request.get('/api/posts/')
            .end((error, response)=>{
                const res = JSON.parse(response.text);
                if(res.errors) reject(res.errors);
                console.log(res);
                resolve(res);
            })
    });
};
const create = (post)=> {
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=>{
            Object.assign(post, post, {token: token});
            request.post('/api/posts/')
                .set('content-type', 'application/x-www-form-urlencoded' )
                .send(post)
                .end((error, response)=>{
                    const res = JSON.parse(response.text);
                    if(res.errors) reject(res.errors);
                    resolve(res);
                })
        })

    });
}
const remove = (postID)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=>{
            request.del('/api/posts/'+postID+'?token='+token)
                .end((error, response)=>{
                    if(error) reject(error);
                    resolve(response);
                });
        })

    });
}
const update = (postID, post)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=>{
            Object.assign(post, post, {token: token});
            request.put('/api/posts/'+ postID)
                .set('content-type', 'application/x-www-form-urlencoded' )
                .send(post)
                .end((error, response)=>{
                    if(error) reject(error);
                    resolve(JSON.parse(response.text));
                })
        })

    });
}
const publish = (postID)=>{
    return new Promise((resolve, reject)=>{
        request.put('/api/posts/'+ postID)
            .set('content-type', 'application/x-www-form-urlencoded' )
            .send({publish: true})
            .end((error, response)=>{
                if(error) reject(error);
                resolve(JSON.parse(response.text));
            })
    });
}
const getOne = (postSlug)=>{
    return new Promise((resolve, reject)=>{
        request.get('/api/posts/'+ postSlug)
            .end((error, response)=>{
                if(error) reject(error);
                resolve(JSON.parse(response.text));
            })
    });
}
const getCategory = (categorySlug)=>{
    return new Promise((resolve, reject)=>{
        request.get('/api/posts/category/'+ categorySlug)
            .end((error, response)=>{
                if(error) reject(error);
                resolve(JSON.parse(response.text));
            })
    });
}
export { create, remove, update, publish, getAll, getOne, getCategory};
