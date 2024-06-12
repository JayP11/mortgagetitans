import React, { useEffect } from "react";
import "./Team.css";
import { teamData } from "../../data";

const Team = () => {
  return (
    <div className="team">
      <div className="head-team">
        <h2>About Founder</h2>
      </div>
      <div className="team-content">
        {teamData.map((data) => {
          return (
            <div className="card-t" key={data.id}>
              <div className="flex">
                <img src={data.img} alt={data.id} />
                <div>
                  <h3>{data.name}</h3>
                  <h4>{data.post}</h4>
                  <p>{data.about}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
