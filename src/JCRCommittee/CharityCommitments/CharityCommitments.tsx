import '../../index.css';
import usePageTitle from '../../usePageTitle';
import { Link } from 'react-router-dom';
import React from 'react';
import currCharities from "./charities-current.json";
import charities from "./charities.json";

function CharityCommitments() {
  usePageTitle('Supported Charities? | Girton JCR');
  return (
    <div className="CharityCommitments">
      <h1>Supported Charities</h1>
      <p>
        We are fortunate enough to be able to provide support to many charities. Below you can find a list of our currently supported charities.
      </p>
      <br />
      <table style={{ borderCollapse: 'collapse', width: "100%" }}>
        <thead>
          <tr style={{ borderBottom: '2pt solid black' }}>
            <th style={{ padding: "8px" }}>Charity Name</th>
            <th style={{ padding: "8px" }}>Website Link</th>
            <th style={{ padding: "8px" }}>Charity Info</th>
          </tr>
        </thead>
        <tbody>
          {currCharities.map(charity => <tr key={charity.name} style={{ borderTop: '1pt solid gray', padding: "4px" }}>
            <td style={{ padding: "8px" }}>{charity.name}</td>
            <td style={{ padding: "8px" }}><Link to={charity.link}>{charity.link}</Link></td>
            <td style={{ padding: "8px" }}>{charity.description}</td>
          </tr>)}
        </tbody>
      </table>
      <br />
      <hr />
      <br />
      <p>
        Below is a list of all charities that we have previously supported.
      </p>
      <br />
      <table style={{ borderCollapse: 'collapse', width: "100%" }}>
        <thead>
          <tr style={{ borderBottom: '2pt solid black' }}>
            <th style={{ padding: "8px" }}>Charity Name</th>
            <th style={{ padding: "8px" }}>Website Link</th>
            <th style={{ padding: "8px" }}>Charity Info</th>
          </tr>
        </thead>
        <tbody>
          {charities.map(charity => <tr key={charity.name} style={{ borderTop: '1pt solid gray', padding: "4px" }}>
            <td style={{ padding: "8px" }}>{charity.name}</td>
            <td style={{ padding: "8px" }}><Link to={charity.link}>{charity.link}</Link></td>
            <td style={{ padding: "8px" }}>{charity.description}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default CharityCommitments;
