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

function accessElementInArray(arrayElements, index) {
  return arrayElements[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayElements) {
  arrayElements.shift()
  return arrayElements
}

function removeElementFromBeginningOfArray(arrayElements) {
  arrayElements.slice(1)  
}


