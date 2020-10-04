const GSheetReader = require('g-sheets-api');

// This project simplifies the process of reading data from a Google Sheet via Google Sheets API (https://developers.google.com/sheets/api/).
// More info about Google Sheets Reader (g-sheets-api). https://github.com/bpk68/g-sheets-api

// Public Sheet URL
// https://docs.google.com/spreadsheets/d/1YFnUTOMA_U5k1jfT-EhSxzS4145tN8LUr-cGb7_N_Hs/edit?usp=sharing

// basic use
/*
const options = {
  sheetId: '1YFnUTOMA_U5k1jfT-EhSxzS4145tN8LUr-cGb7_N_Hs',
  sheetNumber: 2,
  returnAllResults: true  
}
*/ 

// using a filter (on sheet 1)
/*
 const options = {
  sheetId: '1YFnUTOMA_U5k1jfT-EhSxzS4145tN8LUr-cGb7_N_Hs',
  sheetNumber: 1,
  returnAllResults: false,
  filter: {
    'themes': 'hardware'
  }
}
*/

// using a filter (on sheet 2)
// this filters for names that have a 'c' in the last name
const options = {
  sheetId: '1YFnUTOMA_U5k1jfT-EhSxzS4145tN8LUr-cGb7_N_Hs',
  sheetNumber: 2,
  returnAllResults: false,
  filter: {
    'last': 'c'
  }
}

// call the reader and print out the results to the node console (in terminal)
GSheetReader(options, function(results){
  console.log(results);
});