import React, { useEffect, useState } from 'react';
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/workouts/` : 'http://localhost:8000/api/workouts/';

function Workouts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Workouts endpoint:', baseUrl);
        console.log('Fetched data:', results);
      });
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Workouts</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Workouts;
