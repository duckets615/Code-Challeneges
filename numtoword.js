let single = {0: '', 1: 'one', 2: "two", 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: "thirteen", 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
let double = {1: 'ten', 2: 'twenty', 3: "thirty", 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}

function twonum(num, tier) {
  let snum = String(num)
  if (num == 0) return ''
  if (num < 20) return `${single[num]}`
  return num > 19 && num % 10 === 0 ? `${double[snum[0]]}` : `${double[snum[0]]}-${single[snum[1]]}`
}
function threenum(num, tier) {
  let snum = String(num);
  if (tier === 'hundred') {
    
    if (num < 100) return twonum(num)    
    else if (snum[1] + snum[2] < 20) return `${single[snum[0]]} hundred ${single[+(snum[1] + snum[2])]}`.trim();
    else if (snum[1] + snum[2] > 19 && snum[2] == 0) return `${single[snum[0]]} hundred ${double[snum[1]]}`.trim();
    else return `${single[snum[0]]} hundred ${double[snum[1]]}-${single[snum[2]]}`.trim();
  }
  if (tier === 'thousand') {
    let dub = snum[1] + snum[2];
    if (snum[1] == 0 && snum[2] == 0) return `${single[snum[0]]} hundred thousand`
    if (snum[1] == 0 && snum[2] != 0) return `${single[snum[0]]} hundred ${single[snum[2]]} thousand`
    if (snum[1] >= 2 && snum[2] == 0) return `${single[snum[0]]} hundred ${double[snum[1]]} thousand`
    if (snum[1] == 1) return `${single[snum[0]]} hundred ${single[dub]} thousand`
    return `${single[snum[0]]} hundred ${double[snum[1]]}-${single[snum[2]]} thousand`
  }
}

function number2words(num) {
    let snum = String(num);    
    if (num === 0) return `zero`;  
    else if (num < 20) return `${single[num]}`.trim();
    else if (num < 99 && snum[1] == 0) return `${double[snum[0]]}`.trim();
    else if (num < 99) return `${double[snum[0]]}-${single[snum[1]]}`.trim();
    if (snum.length === 3) return threenum(num, 'hundred').trim();
    if (snum.length === 4) return `${single[snum[0]]} thousand ${threenum(+(num.toString().slice(1)), 'hundred')}`.trim();  
    if (snum.length === 5) return `${twonum(num.toString().slice(0,2))} thousand ${threenum(+(num.toString().slice(2)), 'hundred')}`.trim();
    if (snum.length === 6) return `${threenum(num.toString().slice(0,3), 'thousand')} ${threenum(+(num.toString().slice(3)), 'hundred')}`//.trim();
}

number2words(219830) /*?*/



number2words(900239) /*?*/
'nine hundred thousand two hundred thirty-nine', 
'nine hundred  thousand two hundred thirty-nine'
number2words(702498) /*?*/
'seven hundred two thousand four hundred ninety-eight'
'seven hundred thousand four hundred ninety-eight'
number2words(1000)      /*?*///  "zero"
number2words(100553)      /*?*///  "zero"
  
  
number2words(0)      /*?*///  "zero"
number2words(1)      /*?*///  "one"
number2words(9)      /*?*///  "nine"
number2words(10)     /*?*///  "ten"
number2words(17)     /*?*///  "seventeen"
number2words(20)     /*?*///  "twenty"
number2words(21)     /*?*///  "twenty-one"
number2words(45)     /*?*///  "forty-five"
number2words(80)     /*?*///  "eighty"
number2words(99)     /*?*///  "ninety-nine"
number2words(100)    /*?*///  "one hundred"
number2words(800)    /*?*///  "eight hundred"
number2words(301)    /*?*///  "three hundred one"
number2words(903)    /*?*///  "nine hundred three"
number2words(950)    /*?*///  "nine hundred fifty"
number2words(550)    /*?*///  "five hundred fifty"
number2words(799)    /*?*///  "seven hundred ninety-nine"
number2words(637)    /*?*///  "six hundred thirty-seven"
number2words(610)    /*?*///  "six hundred ten"  
number2words(1000)   /*?*///  "one thousand"
number2words(1003)   /*?*///  "one thousand"
number2words(8005)   /*?*///  "eight thousand five"
number2words(6100)   /*?*///  "six thousand one hundred"
number2words(5423)   /*?*///  "five thousand four hundred twenty-three"
number2words(3904)   /*?*///  "three thousand nine hundred four"
number2words(61411)  /*?*///  "sixty-one thousand four hundred eleven"
number2words(81300)  /*?*///  "eighty-one thousand three hundred"
number2words(99999)  /*?*///  "ninety-nine thousand nine hundred ninety-nine"
number2words(19320)  /*?*///  "nineteen thousand three hundred twenty" 
number2words(26980)  /*?*///  "four hundred twenty-six thousand nine hundred eighty" 
number2words(12287)  /*?*///  "twelve thousand two hundred eighty-seven"
number2words(10001)  /*?*///  "ten thousand one"
number2words(40011)  /*?*///  "fourty thousand eleven"
number2words(888888) /*?*///  "eight hundred eighty-eight thousand eight hundred eighty-eight"
number2words(717932) /*?*///  "seven hundred seventeen thousand nine hundred thirty-two"
number2words(641072) /*?*///  "six hundred forty-one thousand seventy-two" 
number2words(100000) /*?*///  "one hundred thousand"
number2words(100001) /*?*///  "one hundred thousand one"
number2words(371730) /*?*///  "three hundred seventy-one thousand seven hundred thirty"
number2words(100101) /*?*///  "one hundred thousand one hundred one" 
number2words(100070) /*?*///  "one hundred thousand seventy" 
number2words(100451) /*?*///  "one hundred thousand four hundred fifty one" 
number2words(125451) /*?*///  "one hundred twenty five thousand four hundred fifty one" 
number2words(123456) /*?*///  "eight hundred eighty-eight thousand eight hundred eighty-eight"
number2words(792216) /*?*///  "seven hundred ninety-two thousand two hundred sixteen"
number2words(966617) /*?*///  "nine hundred sixty-six thousand six hundred seventeen"
number2words(142025) /*?*///  "one hundred forty-two thousand twenty-five"
number2words(729902) /*?*///  "seven hundred twenty-nine thousand nine hundred two"
number2words(210617) /*?*///  "two hundred ten thousand six hundred seventeen"
number2words(473818) /*?*///  "four hundred seventy-three thousand eight hundred eighteen"
number2words(824170) /*?*///  "eight hundred twenty-four thousand one hundred seventy"
number2words(991066) /*?*///  "nine hundred ninety-one thousand sixty-six"
number2words(751617) /*?*///  "seven hundred fifty-one thousand six hundred seventeen"
number2words(898022) /*?*///  "eight hundred ninety-eight thousand twenty-two"
number2words(364000) /*?*///  "three hundred sixty-four thousand"
number2words(687096) /*?*///  "six hundred eighty-seven thousand ninety-six"
number2words(887520) /*?*///  "eight hundred eighty-seven thousand five hundred twenty"
number2words(102312) /*?*///  "one hundred two thousand three hundred twelve"



//  111984, one hundred eleven thousand nine hundred eighty-four - Expected: 'one hundred eleven thousand nine hundred eighty-four', y-four'
//  18946, eighteen thousand nine hundred forty-six - Expected: 'eighteen thousand nine hundred forty-six', 34 eleven thousand nine hundred thirty-four
//  543902, five hundred forty-three thousand nine hundred two - Expected: 'five hundred forty-three thousand nine hundred two', ousand seven hundred ten - Expected: 'three hundred thirty-three thousand seven hundred ten',  undefined'
//  813098, eight hundred thirteen thousand ninety-eight - Expected: 'eight hundred thirteen thousand ninety-eight', inety-eight'
//  440849, four hundred forty thousand eight hundred forty-nine - Expected: 'four hundred forty thousand eight hundred forty-nine', forty-nine'
//  149032, one hundred forty-nine thousand thirty-two - Expected: 'one hundred forty-nine thousand thirty-two', irty-two'
//  110219, one hundred ten thousand two hundred nineteen - Expected: 'one hundred ten thousand two hundred nineteen', ine'
//  925501, nine hundred twenty-five thousand five hundred one - Expected: 'nine hundred twenty-five thousand five hundred one', usand one hundred seven - Expected: 'nine hundred thirty-eight thousand one hundred seven', usand six hundred fifteen - Expected: 'eight hundred ninety-five thousand six hundred fifteen', ten-five'
//  879612, eight hundred seventy-nine thousand six hundred twelve - Expected: 'eight hundred seventy-nine thousand six hundred twelve',  ten-two'
//  890962, eight hundred ninety thousand nine hundred sixty-two - Expected: 'eight hundred ninety thousand nine hundred sixty-two',  sixty-two'
//  825415, eight hundred twenty-five thousand four hundred fifteen - Expected: 'eight hundred twenty-five thousand four hundred fifteen',  ten-five'
//  616626, six hundred sixteen thousand six hundred twenty-six - Expected: 'six hundred sixteen thousand six hundred twenty-six', -six'
//  304030, three hundred four thousand thirty - Expected: 'three hundred four thousand thirty', ined'
//  513116, five hundred thirteen thousand one hundred sixteen - Expected: 'five hundred thirteen thousand one hundred sixteen', -six'
//  611514, six hundred eleven thousand five hundred fourteen - Expected: 'six hundred eleven thousand five hundred fourteen', our'
//  414170, four hundred fourteen thousand one hundred seventy - Expected: 'four hundred fourteen thousand one hundred seventy', defined'
//  610252, six hundred ten thousand two hundred fifty-two - Expected: 'six hundred ten thousand two hundred fifty-two', -two'
//  486670, four hundred eighty-six thousand six hundred seventy - Expected: 'four hundred eighty-six thousand six hundred seventy', undefined'
//  835810, eight hundred thirty-five thousand eight hundred ten - Expected: 'eight hundred thirty-five thousand eight hundred ten', undefined'
//  805004, eight hundred five thousand four - Expected: 'eight hundred five thousand four', and two hundred thirty-two - Expected: 'three hundred seventeen thousand two hundred thirty-two', irty-two'
// Test Passed: Value == 'seven hundred seventy-six thousand eight hundred forty-seven'
//  680880, six hundred eighty thousand eight hundred eighty - Expected: 'six hundred eighty thousand eight hundred eighty', undefined'
//  540729, five hundred forty thousand seven hundred twenty-nine - Expected: 'five hundred forty thousand seven hundred twenty-nine', twenty-nine'