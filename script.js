// Reemplaza con tu Client ID
const clientId = '60abfec850fb4ee18f710c9255ed19db';
const redirectUri = 'https://blackv00y.github.io/miusicjovan/callback.html';
const scopes = 'user-read-private user-read-email';

function login() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
  window.location.href = authUrl;
}
