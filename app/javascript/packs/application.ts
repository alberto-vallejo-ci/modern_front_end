/***
 * Excerpted from "Modern Front-End Development for Rails",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
***/
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// JS way

// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")

// TS way

import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"
import * as Channels from "channels"
import Turbolinks from "turbolinks"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import GenericToggle from 'src/generic_toggle'

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".day-body").forEach(day => {
    new GenericToggle(
      day,
      ".js--day-button",
      ".js--day-text",
      (element, _, hidden) => {
        const buttonText: HTMLElement = day.querySelector(".js--button-text")
        buttonText.innerText = hidden ? "Show" : "Hide"
      }
    ).initHandlers()
  })

  document.querySelectorAll(".js--schedule-day").forEach(button => {
    const buttonSelector = `#${button.id}`
    const targetSelector = buttonSelector.replace("toggle", "body")
    new GenericToggle(
      document,
      buttonSelector,
      targetSelector,
      (element, _, hidden) => {
        element.classList.toggle("has-text-danger", hidden)
      }
    ).initHandlers()
  })
})
