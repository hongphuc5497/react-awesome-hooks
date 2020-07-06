import React from 'react'
import useComponentDidMount from '../../components'

const MountComponent = () => {
  useComponentDidMount(() => console.log('This component has been mounted'))

  return <div>Check your browser console</div>
}

export default MountComponent;