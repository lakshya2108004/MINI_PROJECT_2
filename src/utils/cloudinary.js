import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// cloudinary.config({
//   CLOUDINARY_CONFIG
// });


console.log("Cloudinary name:", cloudinary.config().cloud_name);
export default cloudinary;
