Here are the steps you need to successfully bring up the humix sense

1. config network of this raspberry pi. 
   You can find config file : /etc/wpa_supplicant/wpa_supplicant.conf

2. config the url of humix-think and pick an id for this device. 
   You can find config file : ~/.humix/config.js

3. Config the dialog module with credentials of tts/stt engine of your choice. To use Chinese for TTS and STT, change the 'lang' property to either 'chs' (Simplified Chiese) or 'cht'(Traditional Chinese) 
   You can find config file : ~/.humix/config.js

NOTE: if you don't want to start dialog module along with humix-sense, simply move the humix-dialog-module directory to some other directory. Only modules that under '~/humix-sense/sense/modules/core' will be started automatically'
