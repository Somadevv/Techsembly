const elements = {
  mobileQuery: window.matchMedia('(max-width: 768px)'),
  togglePane: document.getElementById('togglePane'),
}

const checkQuery = (query) => {
  query.matches ? elements.togglePane.classList.add('disabled') : elements.togglePane.classList.remove('disabled')
}

document.addEventListener('DOMContentLoaded', async function (event) {
  checkQuery(elements.mobileQuery)
  elements.mobileQuery.addListener(checkQuery)
})
