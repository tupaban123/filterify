export async function refreshToken(old_token, setAccessToken, setDisplayName)
  {
    console.log('refreshing');
    let response = await fetch(`http://localhost:5000/token/refresh_token?access_token=${old_token}`);
    let result = await response.json();

    if(result.error)
    {
      console.log('Error refreshing token');
      console.log(result);

      return;
    }

    setAccessToken(result.access_token)
    localStorage.setItem('spotifyAccessToken', result.access_token);
  }

  export async function loadUsername(accessToken)
  {
    let response = await fetch('http://localhost:5000/user/getusername', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${accessToken}`,
        'Content-type': 'application/json'
      }
    });

    return response;
  }