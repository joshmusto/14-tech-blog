const withAuth = (req, res, next) => {
    //if the user isn't logged in...
    if (!req.session.logged_in) {
        //...redirect them to the login route...
        res.redirect('/login');
    } else {
        //...otherwise, let them continue as intended
        next();
    }
};

//export the module so it can be used in other files
module.exports = withAuth;