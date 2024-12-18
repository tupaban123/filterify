const spotifyApi = require('../utils/spotifyApi');
const { getRefreshToken, removeTokensPair, saveToken } = require('../utils/tokenManager')

var client_id = process.env.SPOTIFY_CLIENT_ID;
var client_secret = process.env.SPOTIFY_CLIENT_SECRET;

exports.refreshToken = async (req, res) => {
    var old_access_token = req.query.access_token;

    if(!old_access_token)
    {
      res.send({
        'error': 'Access token not entered'
      });

      return;
    }

    var pair = getRefreshToken(old_access_token);
    var refresh_token = pair.refresh;

    if(!refresh_token) {
          res.send({
            'error': 'No token in json'
          })
          return;
    }

    const response = await spotifyApi.refresh_token(refresh_token, client_id, client_secret);
      
    if(response.error)
    {
      res.send({
        'message': 'error',
        'status': response.status
      });

      return;
    }

    var access_token = response.access_token;
    var expires_in = response.expires_in;

    removeTokensPair(refresh_token);
    saveToken(access_token, refresh_token);

    res.send({
      'access_token': access_token,
    })
}