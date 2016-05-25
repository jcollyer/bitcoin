import React, { Component } from 'react'

export default function App({ children }) {
  return (
    <div id="app">
      {children}
      <canvas id='c'></canvas>
    </div>
  );
};
