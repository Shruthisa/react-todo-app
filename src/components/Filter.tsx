import React, { useState } from 'react';
import { FilterProps } from '../Interfaces/ITodo';


const Filter: React.FC<FilterProps> = ({ setFilter }) => {

  const [fill, setFill] = useState<string>('all')

  return (
    <div className="filter">
      <button
        className="filter"
        style={{ backgroundColor: fill === "all" ? "#4CAF50" : "" }}
        onClick={() => [setFilter('all'), setFill('all')]}>All</button>
      <button
        className="filter"
        style={{ backgroundColor: fill === "completed" ? "#4CAF50" : "" }}
        onClick={() => [setFilter('completed'), setFill('completed')]}>Completed</button>
      <button
        className="filter"
        style={{ backgroundColor: fill === "pending" ? "#4CAF50" : "" }}
        onClick={() => [setFilter('pending'), setFill('pending')]}>Pending</button>
    </div>
  );
};

export default Filter;
