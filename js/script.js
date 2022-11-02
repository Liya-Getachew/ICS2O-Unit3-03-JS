// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-03-JS/sw.js", {
    scope: "/ICS2O-Unit3-03-JS/",
  })
}

/**
 * This function displays an alert.
 */
function solveVolume() {
  //input
  const radius = parseFloat(document.getElementById("radius-of-sphere").value)

  //process
  const volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3)

  //output
  document.getElementById("volume").innerHTML = `Volume = ${volume.toFixed(
    2
  )} cm³`
}
