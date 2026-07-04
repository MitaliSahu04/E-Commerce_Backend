import mongoose from "mongoose";

export const login = async (req, res) => {

      try{
        const {name,email} = req.body
        res.send(200).json({
            success : true,
            message : "success",
            data: {}
        })

      }
      catch(err){
          res.status(500).json({
          success: false,
          message: error.message
    });
      }
};
