import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bitcoins extends Component {
  render() {
    const { bitcoins } = this.props
    return (
      <div>
        <p>Hi test</p>
        <h3>{ bitcoins.data.amount }</h3>
        <h2>{ bitcoins.data.size }</h2>
        <h5>{ bitcoins.data.hash }</h5>
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    bitcoins: appState.bitcoins.bitcoins
  }
}

export default connect(mapStateToProps)(Bitcoins);
