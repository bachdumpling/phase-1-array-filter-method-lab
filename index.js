const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, driversName) {
  const findMatching = drivers.filter(name => {
    return name.toLowerCase() === driversName.toLowerCase()
  })
  return findMatching;
}

console.log(findMatching(drivers, 'bobby'))

function fuzzyMatch(drivers, driversNameLetter) {
  const fuzzyMatch = drivers.filter(letter => {
    return letter.substring(0, driversNameLetter.length) === driversNameLetter
  })

  return fuzzyMatch;
}


console.log(fuzzyMatch(drivers, 'Bo'))

function matchName(array, driverName) {
    return array.filter(home => home.name === driverName)
}