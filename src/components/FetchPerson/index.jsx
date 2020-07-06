import React from 'react';
import useFetch from '../../hooks/useFetch';

const FetchPerson = props => {
  const res = useFetch('https://swapi.co/api/people/1', {})

  if (!res.response) {
    return <div>Loading...</div>
  }

  const person = res.response.name;
  return (
    <div>
      <span>{person}</span>
    </div>
  )
}

export default FetchPerson;