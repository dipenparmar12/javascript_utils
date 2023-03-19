 function handleScrollTo(
  elID = 'heading_secondary',
  topPadding = '120px',
) {
  let root = document.querySelector(':root')

  root.style.scrollBehavior = 'smooth'
  root.style.setProperty('--scroll-padding-top', topPadding)

  document.getElementById(elID)?.scrollIntoView({ behavior: 'smooth' })

  root.style.scrollBehavior = 'auto'
  root.style.setProperty('--scroll-padding-top', 'auto')
}

export default handleScrollTo