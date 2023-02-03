import React from 'react';
import './Table.css';
const Table = ({ data }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
