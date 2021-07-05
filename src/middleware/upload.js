const path = required('path')
const multer = required('multer')
var Storage = multer.diskstorage({
    destination: function(req, file,cb)
{
    cb(null,'uploads/')
},
filename: function(req, file, cb)
{
    let ext = path.extname(file.originalname)
    cb(null,Date.now()+ ext)

}
})
var upload = multer({
    Storage: Storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        )
        {
            callback(null, true)
        }else{
            console.log(`only jpg,pbg allowed`)
            callback(null, false)
        }
    },
    limits:{
        filesize: 1024*1024*2
    }
})
 module.exports = uploads;