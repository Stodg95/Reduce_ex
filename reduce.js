const arr = [
  {name: "Scott"},
  {name: "Samantha"},
  {name: "Ki"},
  {name: "Justin"}
];

function extractValue(arr, key){
  return arr.reduce(function(acc,next){
      acc.push(next[key]);
      return acc;
  },[]);
}

const vowelCount = function(str){
  const vowels = "aeiou";
  return str.split('').reduce(function(acc, next){
    let lowerCase = next.toLocaleLowerCase()
    if(vowels.indexOf(lowerCase) !== -1){
      if(acc[lowerCase]){
        acc[lowerCase]++;
      } else {
        acc[lowerCase] = 1;
      }
    }
    return acc;
  }, {});
}

const addKeyAndValue = function(arr, key, value){
  return arr.reduce(function(acc, next, index){
    acc[index][key] = value;
    return acc;
  }, arr);
}

const partition = function(arr, cb){
  return arr.reduce(function(acc, next){
    if(cb(next)){
      acc[0].push(next);
    } else {
      acc[1].push(next);
    }
    return acc;
  }, [[],[]]);
}