import React, { useEffect, useState } from 'react';
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/users/` : 'http://localhost:8000/api/users/';

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Users endpoint:', baseUrl);
        console.log('Fetched data:', results);
      });
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Users</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
