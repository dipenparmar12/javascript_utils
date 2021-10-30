// Example
// <h1 class="make_rs"> 1234567 </h1>

$(document).ready(() => {
  $total = html_td_total(document.getElementsByClassName('make_rs'), 'amount')
  document.getElementById("expense_total").innerText = $total;
})




function to_rs($number, $locate = 'en-IN') {
  return (!isNaN(parseInt($number))) ? /*'₹' + */ parseInt($number).toLocaleString($locate) : 0
}


function default_format_date($selector = '.format_date') {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  $($selector).each((k, date) => {
    let current_datetime = new Date(date.innerHTML)
    if (current_datetime.getDate()) {
      date.innerHTML = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    } else {
      /*date.innerHTML = 'NA'*/
    }
  });
}
