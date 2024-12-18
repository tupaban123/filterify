const spotifyApi = require('../utils/spotifyApi');

exports.getUsername = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({error: 'No token'});
    }

    const response = await spotifyApi.getUser(token);
        
    if(response.status === 401)
        res.json({
            error: 'Token expired',
            status: 401
        });
    else
        res.json({display_name: response.display_name})
}