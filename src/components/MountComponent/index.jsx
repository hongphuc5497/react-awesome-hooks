import React from 'react'
import useComponentDidMount from '../../hooks/useComponentDidMount'

const MountComponent = () => {
  useComponentDidMount(() => console.log('This component has been mounted'))

  return <div>Check your browser console</div>
}

export default MountComponent;