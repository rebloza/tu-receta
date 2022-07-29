const router = require("express").Router()

const isLoggedIn = require("../middlewares/auth.js")

router.get("/", isLoggedIn, (req, res, next ) => {
    res.render("profile")
})


module.exports = router