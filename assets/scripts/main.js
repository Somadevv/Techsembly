const elements = {
  mobileQuery: window.matchMedia('(max-width: 768px)'),
  togglePane: document.getElementById('togglePane'),
  close: document.getElementById('close'),
  announcement: document.getElementById('announcement'),
}
// Close announcement notification

elements.close.addEventListener('click', () => {
  elements.announcement.style.display = 'none'
})

const checkQuery = (query) => {
  query.matches ? elements.togglePane.classList.add('disabled') : elements.togglePane.classList.remove('disabled')
}

document.addEventListener('DOMContentLoaded', async function (event) {
  checkQuery(elements.mobileQuery)
  elements.mobileQuery.addListener(checkQuery)
})

let accoordion = document.getElementsByClassName('accordion')
let i

for (i = 0; i < accoordion.length; i++) {
  accoordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
    let panel = this.nextElementSibling
    if (panel.style.display === 'block') {
    } else {
      panel.style.display = 'block'
    }
  })
}
