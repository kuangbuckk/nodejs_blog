const Clip = require('./models/Clip');
const {mongooseToObject} = require('../../util/mongoose');

class ClipsController {
    // [GET] /clips/:slug
    //Second param of [GET] method: callback function 
    show(req, res, next) {
        Clip.findOne({ slug: req.params.slug }).lean()
            .then(clip => 
                res.render('clips/show', { clip })
            )
            .catch(next);
    }

    //[GET] /clips/create
    create(req, res, next){
        res.render('clips/create');
    }

    //[POST] /clips/store
    store(req, res, next){
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmlLd8fe-XZ6iqr7EAV7QnIJoRhQ`
        
        //tạo 1 clip mới từ req.body dạng Clip rồi lưu vào database
        const clip = new Clip(formData);
        clip.save()
            .then(()=>res.redirect('/')) //submit vid xong quay lại vào homepage luôn
            .catch(error => {
                
            })
    }
}

module.exports = new ClipsController();
