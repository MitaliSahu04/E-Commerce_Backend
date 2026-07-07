import { wishlistModel } from "../models/wishlistModel.js";

export const removeWishlist = async(req,res)=>{

    try{

        const custGuId = req.user.id;

        const {productId}=req.params;

        await wishlistModel.findOneAndDelete({
            custGuId,
            productId
        });

        res.status(200).json({
            success:true,
            message:"Removed"
        });

    }

    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

}