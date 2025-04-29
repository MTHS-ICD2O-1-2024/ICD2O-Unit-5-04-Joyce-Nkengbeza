// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {
  // input
  const age = document.getElementById("age").value
  const tuesday = document.getElementById("tuesday").value
  const thursday = document.getElementById("thursday").value

  // process
  if (tuesday || thursday || (age >= 12 && age <21)) {
    // output
    document.getElementById("results").innerHTML =
      "You can recieve a student discount."
  }

  else {
    document.getElementById("results").innerHTML =
      "You have to pay regular price."
  }
}