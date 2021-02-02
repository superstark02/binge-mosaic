import React from 'react'
import Typical from 'react-typical'

export default class Example extends React.Component {
  render () {
    return (
      <Typical
        steps={['Web Series', 500, 'Movies', 500, 'TV Shows', 500, 'Mosaic', 500]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}