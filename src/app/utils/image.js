import request from 'superagent';
import localStorage from 'localforage';

const postImage = (files )=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=> {
            let req = request.post('/api/images'+'?token='+token);

            req.attach(files[0].name, files[0]);
            req.end((err, res)=> {
                if (err) reject(err);

                resolve(res);
            });
        })
    });

}
const getImages = ()=>{
    return new Promise((resolve, reject)=>{
        request.get('/api/images')
        .end((error, response)=>{
            if(error) reject(error);
            resolve(JSON.parse(response.text));
        })
    })
}
const updateImage = (image)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=> {
            request.put('/api/images/' + image._id)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({caption: image.caption, token: token})
                .end((error, response)=> {
                    console.log(error, response);
                    if (error) reject(error);
                    resolve(JSON.parse(response.text));
                })
        })

    });
}
const removeImage = (imageID)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=> {
            request.del('/api/images/' + imageID+'?token='+token)
                .end((error, response)=> {
                    if (error) reject(error);
                    resolve(response);
                })
        });
    })
}
export { postImage, getImages, updateImage, removeImage };