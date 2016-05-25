import React, { Component } from 'react'

export default (props) => {
  var divStyle = {
    width: props.singleBitcoin.size / 10,
    height: props.singleBitcoin.size / 10
  };
  return (
    <div>
      <h3>size: {props.singleBitcoin.size}</h3>
      <h2>$ {props.singleBitcoin.amount / 10000000}</h2>
      <div id="bitcoin-blip" style={divStyle} ></div>
    </div>
  )
}
