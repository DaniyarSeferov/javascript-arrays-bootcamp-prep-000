var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
  ]
  
function addElementToBeginningOfArray(arrayElements, element) {
  return [element, ...arrayElements]
}

function destructivelyAddElementToBeginningOfArray(arrayElements, element) {
  arrayElements.unshift(element)
  return arrayElements
}

function addElementToEndOfArray (arrayElements, element) {
  return [...arrayElements, element]
}

function destructivelyAddElementToEndOfArray (arrayElements, element) {
  arrayElements.push(element)
  return arrayElements
}