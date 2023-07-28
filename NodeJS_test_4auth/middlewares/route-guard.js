const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.redirect('/dashboard')
}


const isLoggedOut = (req, res, next) => {
    !req.session.currentUser ? next() : res.redirect('/login')
}

module.exports = { isLoggedIn, isLoggedOut }