import React, { useEffect, useState } from 'react';
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/activities/` : 'http://localhost:8000/api/activities/';

function Activities() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Activities endpoint:', baseUrl);
        console.log('Fetched data:', results);
      });
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Activities</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.user}</td>
                <td>{item.type}</td>
                <td>{item.duration}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Activities;
