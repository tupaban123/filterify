const fs = require('fs');
const path = './tokens.json'


function saveToken(access_token, refresh_token) {
  let tokens = [];

  let newPair = {
    access: access_token,
    refresh: refresh_token
  }

  if(fs.existsSync(path)) {
    tokens=JSON.parse(fs.readFileSync(path));
  }

  tokens.push(newPair);
  fs.writeFileSync(path, JSON.stringify(tokens));
}

function getRefreshToken(access_token)
{
  if(!fs.existsSync(path)){ console.log('returning null'); return null; }
  
  var obj = (JSON.parse(fs.readFileSync(path))).find(item => item.access == access_token)

  return obj;
}

function removeTokensPair(refresh_token)
{
  if(!fs.existsSync(path)) return;

  let tokens = JSON.parse(fs.readFileSync(path));
  let newTokens = tokens.filter(item => item.refresh == refresh_token);

  fs.writeFileSync(path, JSON.stringify(newTokens));
}

module.exports = { saveToken, getRefreshToken, removeTokensPair }