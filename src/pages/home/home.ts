import { Component } from '@angular/core';
import { NavController, ViewController, Platform, AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import 'leaflet';
import 'leaflet.locatecontrol';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public platform: Platform, public network: Network, public geolocation: Geolocation, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    if (this.platform.platforms[0] == 'browser') {
      this.checkConnection();
    } else {
      this.loadMap();
    }
  }


  checkConnection() {
    let t = this;

    this.platform.ready().then(() => {

      let networkType = this.network.type;

      if (networkType == "unknown" || networkType == "none" || networkType == undefined) {
        let alert = this.alertCtrl.create({
          title: 'Not online',
          subTitle: 'Connect to the internet and try again.',
          buttons: [
            {
              text: "Try again",
              handler: function () { t.checkConnection() }
            }
          ]
        });
        alert.present();

      } else {
        this.loadMap();
      }

    });

  }

  loadMap() {

    let lyrStreets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ");
    let lyrDark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ");
    let lyrTrafficDay = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/traffic-day-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ");
    let lyrTrafficNight = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/traffic-night-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ");
    let lyrOutdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ");
    let lyrSatelliteStreets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ");

    let map = L.map('map',
      {
        layers: [lyrStreets, lyrDark, lyrTrafficDay, lyrTrafficNight, lyrOutdoors, lyrSatelliteStreets]
      }
    );

    var baseMaps = {
      "Outdoors": lyrOutdoors,
      "Satellite Streets": lyrSatelliteStreets,
      "Traffic (Day)": lyrTrafficDay,
      "Traffic (Night)": lyrTrafficNight,
      "Day": lyrStreets,
      "Night": lyrDark,
    }

    let layerCtrl = L.control.layers(baseMaps).addTo(map);

    L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token==pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ", {
      //attribution: '',
      //maxZoom: 15
    }).addTo(map);

    L.control.locate({
      flyTo: true,
      setView: "always",
      strings: {
        title: "Locate me"
      },
      markerStyle: {
        color: "White",
        fillColor: "Green"
      },
      circleStyle: {
        color: "White",
        fillColor: "DodgerBlue"
      }
    }).addTo(map);

    //web location
    map.locate({ setView: true, });

  } //end loadMap



} //end HomePage class
