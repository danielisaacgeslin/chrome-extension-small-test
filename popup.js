function tabFunction() {
  console.log('tabFunction :)')
  console.log(document.querySelectorAll('div'));
}

document.getElementById('interact').addEventListener('click', () => {
  chrome.tabs.executeScript({ code: `(${tabFunction.toString()})()` })
});