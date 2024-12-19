const querystring = require('querystring');
const spotifyApi = require('../utils/spotifyApi');
const { generateRandomString } = require('../utils/generateRandomString');
const { response } = require('express');
const { removeTokensPair, saveToken } = require('../utils/tokenManager')

var client_id = process.env.SPOTIFY_CLIENT_ID;
var client_secret = process.env.SPOTIFY_CLIENT_SECRET;
var redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

exports.login = (req, res) => {
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email'
    
    res.redirect('https://accounts.spotify.com/authorize?' + 
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        })
    );  
}

exports.callback = async (req, res) => {
    const code = req.query.code || null;

    if(!code)
    {
        return res.status(400).json({error: 'Authoriztion code is missing!'});
    }

    const state = req.query.state || null;

    if (state === null) {
        res.redirect('/#' +
        querystring.stringify({
            error: 'state_mismatch'
        }));

        return;
    }

    const tokenData = await spotifyApi.getTokens(code, redirect_uri, client_id, client_secret);
    
    if(tokenData.error)
    {
        res.json({
            'message': 'error',
            'status': response.status
        })
    }
    
    res.redirect('http://localhost:5173/#' + querystring.stringify({
        access_token: tokenData.access_token
    }));

    removeTokensPair(tokenData.refresh_token);
    saveToken(tokenData.access_token, tokenData.refresh_token);
    
}