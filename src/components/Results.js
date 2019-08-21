import React, {useState} from 'react';

const Results = ({results}) => {
    console.log("results", results);
    const renderResults = () => {
        if (results && results.length) {

            return (
              <div>
                  {results.map(({id, name}) => <div key={id}>
                      Id: {id} <br/>
                      Name:{name} <br/><br/><br/>
                  </div>)}
              </div>
            )
        } else {
            return <div> Click Search to get some results</div>
        }
    };
    return (
      <div>{renderResults()} </div>
    );
};

export default Results;