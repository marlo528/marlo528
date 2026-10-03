
import multer from "multer"
import path from "path"

const armazenamento = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "uploads/senai")
    },

    filename: (request, file, callback) => {
        const nomeUnico = `${Date.now()}-${file.originalname}`
        
        callback(null, nomeUnico)
    }
})

const upload = multer({
    storage: armazenamento
})

export default upload