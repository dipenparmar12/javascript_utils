$('#vehicles-table tbody').on('click', 'td', function (e) {
  const $tr = e.target.closest('tr')
  const $td = this
  $tr.classList.toggle("selected_row");

  if ($tr.classList.contains("selected_row")) {
    $tr.setAttribute("data-selected_row", $td.id);
  } else {
    $tr.removeAttribute("data-selected_row");
  }

  console.log($tr, $td)
})