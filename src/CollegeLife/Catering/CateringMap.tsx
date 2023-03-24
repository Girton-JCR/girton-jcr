import React from 'react';
import './Catering.css';
import { Map, Marker, Overlay as MapOverlay } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';

function CateringMap() {
  const [sainsburys, showSainsburys] = React.useState(false);
  const [swirles, showSwirles] = React.useState(false);
  const [girton, showGirton] = React.useState(false);
  const [coop, showCoop] = React.useState(false);
  const [aldi, showAldi] = React.useState(false);
  const [iceland, showIceland] = React.useState(false);
  const nOff = 50;
  const eOff = 90;

  function hideAll() {
    showGirton(false);
    showSwirles(false);
    showSainsburys(false);
    showCoop(false);
    showAldi(false);
    showIceland(false);
  }

  return (
    <Map
      provider={osm}
      height={500}
      defaultCenter={[52.2256, 0.0975]}
      defaultZoom={14}
      onClick={() => {
        hideAll();
      }}
    >
      <Marker
        width={40}
        anchor={[52.2286, 0.0839]}
        onClick={() => {
          hideAll();
          showGirton(true);
        }}
      />
      {girton ? (
        <MapOverlay anchor={[52.2286, 0.0839]} offset={[nOff, eOff]}>
          <div className="MapOverlay">
            <p>
              Girton College
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Huntingdon%20Rd,%20Girton,%20Cambridge%20CB3%200JG,%20UK"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
        </MapOverlay>
      ) : null}
      <Marker
        width={40}
        anchor={[52.21917582435009, 0.08587129317852275]}
        onClick={() => {
          hideAll();
          showSwirles(true);
        }}
      />
      {swirles ? (
        <MapOverlay
          anchor={[52.21917582435009, 0.08587129317852275]}
          offset={[nOff, eOff]}
        >
          <div className="MapOverlay">
            <p>
              Swirles Court
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pheasant%20Dr,%20Cambridge,%20CB3%201AQ,%20UK"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
        </MapOverlay>
      ) : null}
      <Marker
        width={40}
        anchor={[52.21811012258638, 0.0873549120551039]}
        onClick={() => {
          hideAll();
          showSainsburys(true);
        }}
      />
      {sainsburys ? (
        <MapOverlay
          anchor={[52.21811012258638, 0.0873549120551039]}
          offset={[nOff, eOff]}
        >
          <div className="MapOverlay">
            <p>
              Sainsbury&apos;s Eddington
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=27%20Eddington%20Ave,%20Cambridge%20CB3%201SE,%20UK"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
        </MapOverlay>
      ) : null}
      <Marker
        width={40}
        anchor={[52.23363425368527, 0.08616995106371961]}
        onClick={() => {
          hideAll();
          showCoop(true);
        }}
      />
      {coop ? (
        <MapOverlay
          anchor={[52.23363425368527, 0.08616995106371961]}
          offset={[nOff, eOff]}
        >
          <div className="MapOverlay">
            <p>
              Co-op Girton
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=120%20Girton%20Rd,%20Girton,%20Cambridge%20CB3%200LW,%20UK"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
        </MapOverlay>
      ) : null}
      <Marker
        width={40}
        anchor={[52.21954695975649, 0.11059114870290605]}
        onClick={() => {
          hideAll();
          showAldi(true);
        }}
      />
      {aldi ? (
        <MapOverlay
          anchor={[52.21954695975649, 0.11059114870290605]}
          offset={[nOff, eOff]}
        >
          <div className="MapOverlay">
            <p>
              Aldi
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Histon%20Rd,%20Cambridge%20CB4%203JD,%20UK"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
        </MapOverlay>
      ) : null}
      <Marker
        width={40}
        anchor={[52.21973690562224, 0.11099479451279635]}
        onClick={() => {
          hideAll();
          showIceland(true);
        }}
      />
      {iceland ? (
        <MapOverlay
          anchor={[52.21973690562224, 0.11099479451279635]}
          offset={[nOff, eOff]}
        >
          <div className="MapOverlay">
            <p>
              Iceland
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Histon%20Rd,%20Cambridge%20CB4%203JD,%20UK"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
        </MapOverlay>
      ) : null}
    </Map>
  );
}

export default CateringMap;
