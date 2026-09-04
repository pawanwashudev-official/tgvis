import urllib.request
import re
import json

url = "https://www.justdial.com/Patna/The-Green-Valley-International-School-Rameshwar-Building-Bihta/0612PX612-X612-221113234023-W1V7_BZDET/photos"

req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
})

try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'https://content\.jdmagicbox\.com/comp/patna/[a-zA-Z0-9_.-]+/[a-zA-Z0-9_.-]+\.jpg', html)
    images2 = re.findall(r'https://images\.jdmagicbox\.com/comp/patna/[a-zA-Z0-9_.-]+/[a-zA-Z0-9_.-]+\.jpg', html)
    print(json.dumps(list(set(images + images2)), indent=2))
except Exception as e:
    print(e)
