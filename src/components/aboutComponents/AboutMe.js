import React, { useEffect } from "react";
import * as ReactFiver from "react-feather";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = defaultIcon;

export const AboutMe = () => {
    useEffect (() => {
        // Declaration des Observations
        const sousTitre = document.querySelector('#sous-title-about');
        const aboutNavigation = document.querySelector("#about-navigation--intersection");
        const map = document.querySelector("#map-intersection");

        // Sous-titre
        const observerSousTitle = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                return sousTitre.classList.remove("sous-title-about");
            } 
            sousTitre.classList.add("sous-title-about");
        }, {
            root:null,
            rootMargin: '0px',
            threshold: 1.0,
          });
        observerSousTitle.observe(sousTitre);

        // Navigation
        const observerNavigation = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                return aboutNavigation.classList.remove("about-navigation--intersection");
            } 
            aboutNavigation.classList.add("about-navigation--intersection");
        },{
            root:null,
            rootMargin: '0px',
            threshold: 1.0,
        })  
        observerNavigation.observe(aboutNavigation)

        // Map
        const obsererMap = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                return map.classList.remove("map-intersection");
            } 
            map.classList.add("map-intersection");
        }) 
        obsererMap.observe(map);

    })

    return (
        <div className="about__description-me show-content">
            <span className="about-desc-start"></span> Hello everyone, My name is RAHERINOTOAVINA <br />
            safidy mariel I was born on February 27, 2004 in <br />
            Madagascar and I am still a computer science <br />
            student at the university of fianarantsoa named <br />
            School of Management and Technological Innovation <br />
            (E.M.I.T).

            <div className="about-desc-location">
                <div><ReactFiver.MapPin /></div>
                <div className="about-desc-l-title">
                    My location here :
                </div>
            </div>
            <MapContainer id="map-intersection" className="map map-intersection" center={[-21.45864, 47.10364]} zoom={14}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-21.45864, 47.10364]} icon={defaultIcon}>
                    <Popup>
                        Hy I'm here 👋
                    </Popup>
                </Marker>
                <Marker position={[-21.4638, 47.10995]} icon={defaultIcon}>
                    <Popup>
                        Here is my School 🏫
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}