import spotipy
import sys
from spotipy.oauth2 import SpotifyClientCredentials

# Replace with your client ID and client secret
client_id = "ce0d02b32d234869a60cef78603e065f"
client_secret = "5696925298314e2a9f5d45c62513abcf"

auth_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(auth_manager=auth_manager)

# Get information about a specific artist
results = sp.search(q="artist:arjit singh", type="artist")

items = results['artists']['items']
if len(items) > 0:
    print(items[0]['name']) 

#images collection
spotify = spotipy.Spotify(auth_manager=SpotifyClientCredentials())

if len(sys.argv) > 1:
    name = ' '.join(sys.argv[1:])
else:
    name = 'Radiohead'

results = spotify.search(q='artist:arjit singh' + name, type='artist')
items = results['artists']['items']
    
if len(items) > 0:
    artist = items[0]
    print(artist['name'], artist['images'][0]['url'])

