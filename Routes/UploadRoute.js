import express from 'express'
const router = express.Router()
// to upload multimedia on surver side.
import multer from 'multer'
// function to store data in public folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
const upload = multer({ storage: storage });

// defining api to store multimedia image in server public folder using multer defined above
router.post("/", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });

export default router
