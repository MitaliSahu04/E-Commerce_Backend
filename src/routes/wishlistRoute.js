import express from "express";
import  {addWishlist} from "../controllers/addwishlistController.js";
import authentication from "../middleware/authentication.js";
import { getWishlist } from "../controllers/getwishlistController.js";
import { removeWishlist } from "../controllers/removewishlistController.js";

const router = express.Router();

router.post("/wishlist", authentication, addWishlist);

router.get("/wishlist", authentication, getWishlist);

router.delete("/wishlist/:productId", authentication, removeWishlist);

export default router;