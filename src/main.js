import React from 'react'
import ReactDOM from 'react-dom'

import webpackLogo from '#/assets/webpack.svg'

import './app.css'

export default class Main extends React.Component {
  render() {
    return <div>
      <h2>Hello World</h2>
      <img width="100" src={webpackLogo} />
    </div>
  }
}
