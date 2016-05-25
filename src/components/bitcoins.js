import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bitcoin from './bitcoin'
import BitcoinBlip from './bitcoin-blip'

class Bitcoins extends Component {
  handleChange() {
    console.log("change!");
  }
  render() {
    const { bitcoins, singleBitcoin, totalBitcoin } = this.props
    const bitcointList = (
      bitcoins.map((b) => {
        return <Bitcoin key={b.hash} amount={b.amount} size={b.size} hash={b.hash} onChange={this.handleChange} />
      }).reverse()
    )
    return (
      <div>
        <div className="panel">
          <h1>Bitcoin Transactions</h1>

          <BitcoinBlip singleBitcoin={singleBitcoin} />
          <h4>Total: $ {totalBitcoin / 1000000 }</h4>
        </div>
        <div className="panel">
          <div id="time-container">
            <time id="timer">0:00:0.00</time>
          </div>
          <div  className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Size</th>
                  <th>Hash</th>
                </tr>
              </thead>
            </table>
          </div>
          <div  className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                { bitcointList }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = (appState) => {
  return {
    bitcoins: appState.bitcoins,
    singleBitcoin: appState.singleBitcoin,
    totalBitcoin: appState.totalBitcoin
  }
}

export default connect(mapStateToProps)(Bitcoins);
