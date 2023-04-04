import React, { Fragment } from 'react'

const Helmet = (props) => {

  document.title = 'Food ordering app-' + props.title

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default Helmet