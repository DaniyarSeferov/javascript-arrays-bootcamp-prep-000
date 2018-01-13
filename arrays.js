var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
  ]
  
function addElementToBeginningOfArray(arrayElements, element) {
  return [element, ...arrayElements]
}

function destructivelyAddElementToBeginningOfArray(arrayElements, element) {
  arrayElements.unshift(element)
  return element
}