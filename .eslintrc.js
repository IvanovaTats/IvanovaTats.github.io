module.exports = {
    "extends": "airbnb-base",
    "env": {
      "browser": true,
      "node": true
    },
    "rules":{
      "comma-dangle":0
    },
    "parser": 'babel-eslint',
    "parserOptions": {
      "sourceType": 'module',
      "allowImportExportEverywhere": true
    }  
};