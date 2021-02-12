const { Router } = require("express")
const router = Router();

// Controllers
const { renderIndex, renderAbout } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);


module.exports = router;
