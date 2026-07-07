import { wishlistModel } from "../models/wishlistModel.js";

export const getWishlist = async (req,res)=>{

    try{

        const custGuId = req.user.id;

        const wishlist = await wishlistModel.find({
            custGuId
        });

        res.status(200).json({
            success:true,
            wishlist
        });

    }

    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

}