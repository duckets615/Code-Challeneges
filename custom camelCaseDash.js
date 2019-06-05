// camelCasingDash;

// Write a function that will take in a string and return a new string
// with all spacing, dashes, and underscores removed. All letters 
// should be in lowercase excluding the first word.
// of each word capitalized excluding the first word

//ex.  'lambda-coDIng_sCHOol' => 'lambdaCodingSchool';

const camelCasingDash = str => str.split(/[-_ ]/).map((ele, i) => i === 0 ? ele = ele.toLowerCase() : ele[0].toUpperCase() + ele.slice(1).toLowerCase()).join('');



camelCasingDash('lambda-coDIng_sCHOol')// lambdaCodingSchool

camelCasingDash('mike huNter-jose_LEI BRYCe_Greg-riCH')// mikeHuNterJoseLeiBryceGregRich
