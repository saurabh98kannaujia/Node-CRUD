const expres = require("express");

const router = expres.Router();

const { patchData} = require("../controller/main");
const {insertData, getData, updateData, deletData} = require('../controller/db_operation')

router.post("/home",patchData);
router.post('/api/insert-data', insertData)
router.get('/api/get-data', getData)
router.post('/api/find-data', updateData)
router.post('/api/delet-data', deletData)


// router.route("/insert-data").post(insertData)

module.exports = router;