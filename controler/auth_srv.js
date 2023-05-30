// this class for auth methods with firebase
const authF = (req, res) => {
    try {
        console.log('auth Started');
        res.render('pages/index', { title: "Home" });
    } catch (ex) {
        res.status(404).send('Some thing went wrong try again !!');
    }

}

const authg = (req, res) => {
    try {
        console.log('get auth Started');
        res.render('pages/index', { title: "Home" });
    } catch (ex) {
        res.status(404).send('Some thing went wrong try again !!');
    }

}

const postAuth = (req, res) => {
    try {
        res.render('pages/index', { title: "Home" });
    } catch (ex) {
        res.status(404).send('Some thing went wrong try again !!');
    }

}

export {
    authF, authg, postAuth
}