function tabFunction() {
  try {
    return document.querySelectorAll(sel).length;
  } catch(e) {
    return 0
  }
}

document.getElementById('el').addEventListener('keyup', () => {
  var sel = document.getElementById('el').value;
  chrome.tabs.executeScript(
    { code: `var sel = "${sel}";(${tabFunction.toString()})()` },
    data => document.getElementById('result').innerText = data[0])
});