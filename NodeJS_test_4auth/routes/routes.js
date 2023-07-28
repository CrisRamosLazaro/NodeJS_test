const router = require('express').Router()
const bcrypt = require('bcryptjs')

// const User = require('../models/User.model')
const { users } = require('../db/dbOfUsers')
const { isLoggedOut } = require('../middlewares/route-guard')

router.get('/', (req, res) => {
    res.redirect('/login')
})

router.get('/login', isLoggedOut, (req, res) => {
    res.send('<form method="post"><input type="text" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><input type="submit" value="Log In"></form>')
})

router.post('/login', (req, res) => {

    const { username, password } = req.body

    if (username.length === 0 || password.length === 0) {
        res.redirect('/login?errorMessage=Please_log_in_to_access_the_dashboard')
        return
    }

    // User
    //     .findOne({ username })
    //     .then(foundUser => {

    //comment line 30 to use a real database:
    const foundUser = users.find(user => user.username === username)

    if (!foundUser) {
        res.redirect('/login?errorMessage=warning:_no_strangers_allowed')
        return
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
        res.redirect('/login?errorMessage=Try_again._Or_not.')
        return
    }
    req.session.currentUser = foundUser
    res.redirect('/dashboard')
    // })
})

router.get('/dashboard', (req, res) => {
    if (req.session.currentUser) {
        res.send(`Hello, ${req.session.currentUser.username}!`)
    } else {
        res.redirect('/login')
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/login'))
})

module.exports = router
