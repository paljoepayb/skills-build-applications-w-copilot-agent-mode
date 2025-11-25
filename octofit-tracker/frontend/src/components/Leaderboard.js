import React, { useEffect, useState } from 'react';
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/leaderboard/` : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Leaderboard endpoint:', baseUrl);
        console.log('Fetched data:', results);
      });
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.team}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Leaderboard;
