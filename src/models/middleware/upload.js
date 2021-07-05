const path = required('path')
const multer = required('multer')
var store = multer.diskstorage({
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