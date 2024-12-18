const axios = require('axios');
const qs = require('querystring')

async function getUser(token) {
    var url = 'https://api.spotify.com/v1/me'
    var headers = {'Authorization': `Bearer ${token}`}

    try {
        const response = await axios.get(url, { headers: headers });
    
        return response.data; 
    } catch (error) {
        return error; 
    }
}

async function getTokens(code, redirect_uri, client_id, client_secret)
{
    const authHeader = (new Buffer.from(client_id + ':' + client_secret).toString('base64'));
    
    const response = await axios.post('https://accounts.spotify.com/api/token',
        new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirect_uri
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authHeader}`
            }
        }
    );

    return response.data;
}

async function refresh_token(refresh_token, client_id, client_secret)
{
    const authHeader = (new Buffer.from(client_id + ':' + client_secret).toString('base64'));

    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refresh_token);

    const response = await axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${authHeader}`
        }
    });

    return response.data;
}

module.exports = {getUser, getTokens, refresh_token }