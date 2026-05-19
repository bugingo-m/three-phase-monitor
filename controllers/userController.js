import {StatusCodes} from 'http-status-codes'
import User from '../model/authModel.js'
import cloudinary from 'cloudinary'
import {promises as fs} from 'fs'

export const getCurrentUser = async(req,res)=>{
    const user = await User.findById({_id:req.user.userId})
    const userWithoutPassword = user.removePassword()
    res.status(StatusCodes.OK).json({user:userWithoutPassword})
}
export const getAllUsers = async(req,res)=>{
    const users = await User.find({role:'admin'})
    const withoutPassword = users.map((user)=>{
        const {_id,firstName,email,lastName,avatar,role,profile}=user
        return {_id,firstName,email,lastName,avatar,role,profile}
    })
    //console.log(withoutPassword);
    res.status(StatusCodes.OK).json({users:withoutPassword})
}
export const updateUser = async(req,res)=>{
    const newUser = {...req.body}
    delete newUser.password
    if(req.file){
        const response = await cloudinary.v2.uploader.upload(req.file.path)
        await fs.unlink(req.file.path)
        newUser.avatar = response.secure_url;
        newUser.avatarPublicId = response.public_id
    }
    const updatedUser = await User.findByIdAndUpdate
    ({_id:req.user.userId},newUser)
    if(req.file && updatedUser.avatarPublicId){
        await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId)
    }
    res.status(StatusCodes.OK).json({msg:'user updated'})
    
}