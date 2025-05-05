// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {
  // input
  const age = document.getElementById("age").value;
  const day = document.getElementById("day").checked;

  // process
    if ( day == 3 || day == 5 || (age >= 12 && age <=21)) {
    // output
    document.getElementById("results").innerHTML =
      "<p>You can recieve a student discount.</p>";
  }

  else {
    document.getElementById("results").innerHTML =
      "<p>You have to pay regular price.</p>";
  }
}
