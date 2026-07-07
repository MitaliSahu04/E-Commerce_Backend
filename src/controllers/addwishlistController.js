import { wishlistModel } from "../models/wishlistModel.js";

export const addWishlist = async (req, res) => {

    try {

        const custGuId = req.user.id;

        const { productId } = req.body;

        const alreadyExist = await wishlistModel.findOne({
            custGuId,
            productId
        });

        if(alreadyExist){

            return res.status(400).json({
                success:false,
                message:"Already added"
            });

        }

        const wishlist = await wishlistModel.create({
            custGuId,
            productId
        });

        res.status(201).json({
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