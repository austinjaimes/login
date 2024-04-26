import User from '../models/user.model.js'

export const register = async (req, res) => {
    const {email, password, username} = req.body
    try {
        const newUser = new User({
            username,
            email,
            password
        })
        const userSaved = await newUser.save()
        res.json(userSaved)
        res.send('Registrando')
    } catch(err) {
        console.log(err);
    }
}

export const login = (req, res) => {
    res.send('login')
}