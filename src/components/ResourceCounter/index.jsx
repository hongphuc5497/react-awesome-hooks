import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';

const ResourceCounter = props => {
  const [resources, setResources] = useState(0);

  useInterval(() => {
    setResources(resources + 2);
  }, 2500)

  return <p>{resources}</p>
}

export default ResourceCounter;