/**
 * Download JSON object as a file from browser
 * @param {String} filename
 * @param {*} dataObjToWrite
 * @see https://stackoverflow.com/a/65939108/10822996
 */
function downloadJsonFile(filename, dataObjToWrite) {
  const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: 'text/json' })
  const link = document.createElement('a')

  link.download = filename
  link.href = window.URL.createObjectURL(blob)
  link.dataset.downloadurl = ['text/json', link.download, link.href].join(':')

  const evt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })

  link.dispatchEvent(evt)
  link.remove()
}

/* 
========================================================
  example
======================================================== 
var data = {  key: 'value' }
var fileName = 'myData.json'
downloadJsonFile(fileName, data)
*/
