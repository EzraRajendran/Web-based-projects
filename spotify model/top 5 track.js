// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCXDQe-avYFD57xmcf6brdAcb0wgNhanRmM0rq50ve-EnSOEZZW_fxx99CsN-LUeVzWo7uVd_4kd596nsizFJwKCq52OGQrEdMRbJw5h4hv5TyHMU-363pw6gB_7O3Yl72mIAXxhozvD6womD3wddZv4kvtF5DeceqIuDhOOucvjJBs3gTVPaiuzfCI9hQKwuICBB4dLIuV2GOZYH1hqmB_dJLuvFUHq1LfswxW9NY2-O2N-GMLNCKnKf8Rl5PTE9AfLCLMt61Ty43I6nwEkIkiIeli';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);