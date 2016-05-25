import React, { Component } from 'react'

export default (props) => {
  return (
    <tr>
      <td>{ props.amount }</td>
      <td>{ props.size }</td>
      <td>{ props.hash }</td>
    </tr>
  )
}
