import React, {useState} from 'react';
import screenings from '../../screenings';
import Results from "../Results";
import {onSearch} from "./onSearch";

const Form = () => {
    const [name, setName] = useState("");
    const [severity, setSeverity] = useState("CRITICAL");
    const [sortBy, setSortBy] = useState("name");
    const [results, setResults] = useState([]);

    const handleNameChange = event => setName(event.target.value);
    const handleSeverityChange = event => setSeverity(event.target.value);
    const handleSortByChange = event => setSortBy(event.target.value);

    const onClick = (name, severity, sortBy) => {
        setResults(onSearch(name,severity, sortBy));
    };



    return (
      <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <label> Country check severity</label>
          <select
            value={severity}
            onChange={handleSeverityChange}
          >
              <option value="CRITICAL"> Critical</option>
              <option value="WARNING"> Warning</option>
              <option value="OK"> Ok</option>
          </select>

          <label> Sort results by</label>
          <select
            value={sortBy}
            onChange={handleSortByChange}
          >
              <option value="name"> Name</option>
              <option value="created"> Created</option>
              <option value="modified"> Modified</option>
          </select>

          <button onClick={() => onClick(name, severity, sortBy)}>Search</button>

          <Results results={results}/>

      </div>
    )
};

export default Form;