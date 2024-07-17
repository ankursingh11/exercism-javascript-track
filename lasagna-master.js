
// https://exercism.org/tracks/javascript/exercises/lasagna-master/edit

/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime){
  if(remainingTime !== undefined){
    switch(remainingTime){
    case 0 :
        return 'Lasagna is done.'
        break;
    default :
        return 'Not done, please wait.';
    }
  }
  return 'You forgot to set the timer.'; 
}

export function preparationTime(layers, avgTime = 2){
  return layers.length * avgTime;
}

export function quantities(layers){
  const ans = {
    noodles : 0,
    sauce : 0
  };
  
  for(let i = 0; i < layers.length; i++){
    if(layers[i] === 'noodles') ans['noodles'] += 50;
    if(layers[i] === 'sauce') ans['sauce'] += 0.2;
  }
  return ans;
}

export function addSecretIngredient(friendList, ingredient){
  ingredient.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, n){
  const newRecipe = {...recipe};
  for(let key in newRecipe){
    newRecipe[key] *= n/2
  }

  return newRecipe;
  
}
