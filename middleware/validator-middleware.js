import User from '../model/authModel.js'
import { body,validationResult } from "express-validator";
import { BadRequestError } from "../errors/errors.js";

const withValidationErrors =(validateValues)=>{
    return[
        validateValues,
        (req,res,next)=>{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                const errorMessages= errors.array().map((error)=>error.msg)
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ]
}
export const validateRegisterInput = withValidationErrors([
    body('firstName').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required')
    .isEmail().withMessage('invalid format')
    .custom(async(email)=>{
        const user = await User.findOne({email})
        if(user){
            throw new BadRequestError('email already exists')
        }
    }),
    body('password').notEmpty().withMessage('password is required')
    .isLength({min:8}).withMessage('password must be at least 8 characters long '),
    body('lastName').notEmpty().withMessage('last name is required')
])

export const validateLoginInput = withValidationErrors([
    body('email').notEmpty().withMessage('email required')
    .isEmail().withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required')
]) 

//update user
export const validateUpdate = withValidationErrors([
    body('firstName').notEmpty().withMessage('please provide name').isLength({min:3})
    .withMessage('name must be atleast 3 characters long').trim(),
    body('email').notEmpty().withMessage('please provide email').isEmail()
    .withMessage('please provide a valid email ').
    custom(async(email,{req})=>{
        const user = await User.findOne({email})
        if(user && user._id.toString() !== req.user.userId){
            throw new BadRequestError('email already exists')
        }
    }).trim(),
    
    body('lastName').notEmpty().withMessage('please provide name').isLength({min:3})
    .withMessage('name must be atleast 3 characters long').trim()
]) 