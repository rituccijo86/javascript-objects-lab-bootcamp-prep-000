var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({recipes}, { [key]: value })
  return recipes
  print(recipes)
}
