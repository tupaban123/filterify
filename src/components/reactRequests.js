export async function refreshToken(old_token)
  {
    console.log('refreshing');
    let response = await fetch(`http://localhost:5000/token/refresh_token?access_token=${old_token}`);
    let result = await response.json();

    setAccessToken(result.access_token)
    localStorage.setItem('spotifyAccessToken', result.access_token);
    const usernameResponse = await loadUsername(result.access_token);
    
    if(usernameResponse.display_name)
      setDisplayName(usernameResponse.display_name)

    setTimeout(() => refreshToken(result.access_token), 3600000); //3600sec
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