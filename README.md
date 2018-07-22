# Leaflet Map Starter
 
 A starter app for Ionic development demonstrating the use of Leaflet, an open-source JavaScript library for mobile-friendly interactive maps.

 This project is based on the Ionic's Blank starter template, and uses Ionic 3.6.0 and Leaflet 1.1.0.

 Features Include:
 
* Zoom control
* Location tracking control
* Add markers with custom label text using Ionic Alerts
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
    


## This project is based on the Blank starter template using Ionic 3.6.0 

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

