import urllib.request
import re

url = "https://www.justdial.com/Patna/The-Green-Valley-International-School-Rameshwar-Building-Bihta/0612PX612-X612-221113234023-W1V7_BZDET/photos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'https://content\.jdmagicbox\.com/comp/patna/[^"]+\.jpg', html)
    print(list(set(images)))
except Exception as e:
    print(e)
