import urllib.request
import re
import json

req = urllib.request.Request(
    'https://html.duckduckgo.com/html/?q=The+Green+Valley+International+School+Bihta+images',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # find images
    imgs = re.findall(r'src=\"([^\"]+)\"', html)
    print(imgs)
except Exception as e:
    print(e)
