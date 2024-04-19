const path = require('path')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const uploadProductImageLocal = async(req,res)=>{

    //BEST WAY TO STORE IMAGES Is CLOUDINARY
    if(!req.files){
        throw new CustomError.BadRequestError('No files Uploaded')
    }


    const productImage = req.files.image

    if(!productImage.mimetype.startsWith('image')){
        throw new CustomError.BadRequestError('Please Upload Image')
    }
    const maxSize = 1000
    if(productImage.size > maxSize){
        throw new CustomError.BadRequestError('Please upload image smaller than 1KB')
    }

    const imagePath = path.join(__dirname,'../public/uploads/'+`${productImage.name}`)
    await productImage.mv(imagePath)
    return res.status(StatusCodes.OK).json({image:{src:`/uploads/${productImage.name}`}})
}
const uploadProductImage = async (req,res)=>{
    
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
        use_filename:true,
    })
    fs.unlinkSync(req.files.image.tempFilePath)
    return res.status(StatusCodes.OK).json({image:{src:result.secure_url}})
}



module.exports = {
    uploadProductImage
}