#ALOA PY______#
import os
import sys
import platform
import zipfile
import shutil
from ftplib import FTP
from PIL import Image, ImageTk
#from future.utils import raise_from
try:
    # for Python2
    from Tkinter import *
except ImportError:
    # for Python3
    from tkinter import *

if platform.system() == 'Linux':
    OSdist = 'Lin'
if platform.system() == 'Windows':
    OSdist = 'Win'

if OSdist == 'Lin':
    userDir = os.environ['HOME']
    localAppData = os.path.join(userDir, '.config')

if OSdist == 'Win':
    userDir = os.environ['HOMEPATH']
    localAppData = os.environ['APPDATA']


#____#
def heb(text):
    if OSdist == 'Lin':
        try:
            textdec = unicode(text, 'utf-8')
            textrev = textdec[::-1]
            return textrev
        except:
            textrev = text[::-1]
            return textrev
    if OSdist == 'Win':
        return text
