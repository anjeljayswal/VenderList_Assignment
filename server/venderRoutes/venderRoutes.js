const express = require("express");

const router = express.Router();

const {createVender,getOneVender,updateVender,deletVender,getVenders} = require("../venderController/venderController");

router.get("/vender", getVenders);
router.get("/onevender/:id", getOneVender);
router.post("/",createVender);
router.patch("/:id",updateVender);
router.delete("/:id",deletVender);

module.exports = router;
