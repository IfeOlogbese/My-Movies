# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#$ ->
#  $('#shows').imagesLoaded ->
#    $('#shows').masonry
#      itemSelector: '.box'

Timers =
  init: ->
    @initCountdownUntil()
    @initCountdownSince()

  initCountdownUntil: ->
    $('div[data-countdown-until]').each (index, element) ->
      $element = $(element)
      date = new Date($element.data('countdown-until'))
      $element.countdown(until: date)

  initCountdownSince: ->
    $('div[data-countdown-since]').each (index, element) ->
      $element = $(element)
      date = new Date($element.data('countdown-since'))
      $element.countdown(since: date)

window.Timers = Timers