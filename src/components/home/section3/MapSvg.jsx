import { useRef, useState, useEffect } from "react";

export default function MapSvg() {
  return (
    <>
      <div className="tip-info">
        <h4>Over 1900 candidates. 28 out of 44 registered political parties</h4>
        <p>
          <span>But the main fight is within just one party: </span>Awami
          League-nominated candidates--with their Boat insignia--and Awami
          League-sponsored independents--mostly bearing Eagle and Truck To
          increase voter turnout, the AL high-command allowed party members to
          contest the polls as independents--and as many as 382 AL independents
          are running for 221 seats out of 300.
        </p>
      </div>
      <iframe
        src="https://datawrapper.dwcdn.net/D9POq/4/"
        allowFullScreen
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </>
  );
}
