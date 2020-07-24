var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  newKittens = kittens.concat(name)
  return newKittens
}

function prependKitten(name){
  newKittens =[name, ... kittens]
  return newKittens
}

function removeFirstKitten(){
  newKittens = kittens.slice(0)
  return newKittens
}