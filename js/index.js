document.querySelector('.hamburger').addEventListener('click', (e) => {
  document.querySelector('.nav-links').classList.toggle('shown')
})

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('shown')
  })
})

document.querySelectorAll('section').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('shown')
  })
})
