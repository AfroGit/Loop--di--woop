const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      // console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

const bobsFollowers = ['Dill', 'Flo', 'Milli', 'Bukk'];
const tinasFollowers = ['Dreko', 'Bukk', 'Flo'];
const  mutualFollowers = [];
for(let i = 0; i < bobsFollowers.length; i++){
    for(let f = 0; f < tinasFollowers.length; f++){
      if(bobsFollowers[i] === tinasFollowers[f]){
       mutualFollowers.push(bobsFollowers[i]);//used the push method to insert the common data found in both arrays.
      }
    }
};
 console.log(mutualFollowers);