import {UsersService} from "../../service/user/users.service"

export class UsersController{
    usersService = new UsersService();

    createUser = async(req,res)=>{
        try{
            const createdUser = 
                await this.usersService.createUser(
                    req.body
                );
            
            res.status(200).json({data: createdUser});
        }catch (err){
            return res.status(err.status).json({data: err})
        };
    };
    
    signinUser = async(req,res)=>{
        try{
            const signinUser = 
                await this.usersService.signinUser(
                    req.body
                );
            return res.status(200).json({data: signinUser});
        }catch(err){
            return res.status(err.status).json({data:err})

        }

    }


}