import React from 'react'
import useComponentWillUnmount from '../../hooks/useComponentWillUnmount.js'

const UnMountComponent = () => {
  useComponentWillUnmount(() => console.log('This component will unmount'))

  return <div>Check your browser console</div>
}

export default UnMountComponent;