function firstStep(input) {
  return input.split('&');
}

function secondStep(input) {
  return input.map(str => str.split('='));
}

function thirdStep(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      input[i] = input[i].map(str => str.replace(/\+/g, ' '));
    }
  }
  return input;
}

function fourthStep(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        input[i][j] = decodeURIComponent(input[i][j]);
    }
  }
  return input;
}

function fifthStep(input) {
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    let pair = input[i];
    obj[pair[0]] = pair[1];
  }

  return obj;
}

function parseBody(str) {
  let temp = firstStep(str);
  temp = secondStep(temp);
  temp = thirdStep(temp);
  temp = fourthStep(temp);
  return fifthStep(temp);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
