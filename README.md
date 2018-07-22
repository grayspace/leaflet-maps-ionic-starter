# Leaflet Map Starter
 
 A starter app for Ionic development demonstrating the use of Leaflet, an open-source JavaScript library for mobile-friendly interactive maps.

![Screenshot 1](https://github.com/grayspace/leaflet-maps-ionic-starter/blob/master/screenshots/Screenshot-1.PNG)
![Screenshot 2](https://github.com/grayspace/leaflet-maps-ionic-starter/blob/master/screenshots/Screenshot-2.PNG)

 This project is based on the Ionic's Blank starter template, and uses Ionic 3.6.0 and Leaflet 1.1.0.

 Features Include:
 
* Zoom control
* Location tracking control
* Base layer control with 6 presets
    - Streets
    - Dark
    - Traffic Day
    - Traffic Night
    - Topo "Outdoors"
    - Satellite/Streets hybrid

Dependencies and their required install/add commands:

* Leaflet: 
    - npm install leaflet --save
    - npm install @types/leaflet --save
* Leaflet locate control:
    - npm install leaflet.locatecontrol --save
    - npm install @types/leaflet.locatecontrol --save
* Network: 
    - npm install @ionic-native/network --save
    - ionic cordova plugin add cordova-plugin-network-information
* Geolocation:
    - npm install @ionic-native/geolocation --save
    - ionic cordova plugin add cordova-plugin-geolocation

