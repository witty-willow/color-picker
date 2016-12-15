<<<<<<< HEAD
console.log('chrome extension is running')

function injectedMethod (tab, method, callback) {
  chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
    chrome.tabs.sendMessage(tab.id, { method: method }, callback);
  });
}

function getBgColors (tab) {
  // When we get a result back from the getBgColors
  // method, alert the data
  injectedMethod(tab, 'getBgColors', function (response) {
    alert('Elements in tab: ' + response.data);
    return true;
  });
}

function showHMTL (tab) {
  // "default_popup": "extension.html",
  // "default_title": "Click here!"
}

// When the browser action is clicked, call the
// getBgColors function.
chrome.runtime.onMessage.addListener(getBgColors);
=======
// console.log('chrome extension is running')

// function injectedMethod (tab, method, callback) {
//   chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
//     chrome.tabs.sendMessage(tab.id, { method: method }, callback);
//   });
// }

// function getBgColors (tab) {
//   // When we get a result back from the getBgColors
//   // method, alert the data
//   injectedMethod(tab, 'getBgColors', function (response) {
//     alert('Elements in tab: ' + response.data);
//     return true;
//   });
// }

// function showHMTL (tab) {
//   // "default_popup": "extension.html",
//   // "default_title": "Click here!"
// }

// // When the browser action is clicked, call the
// // getBgColors function.
// chrome.runtime.onMessage.addListener(getBgColors);
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
