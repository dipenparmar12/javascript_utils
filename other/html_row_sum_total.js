
function html_td_total($html_rows_selector, $dataset = 'expense_amount', rs = true) {
  // $html_rows_selector ==== <td> 's
  // $dataset ==== data-your_attribute
  
  let $expense_total = 0
  Array.from($html_rows_selector).forEach(($html_row, $i) => {
    if (parseInt($html_row.dataset[$dataset])) {
      $expense_total += parseInt($html_row.dataset[$dataset])
    }
    // console.log($html_row, $html_row.dataset[$dataset])
  })
  console.log($expense_total)
  return rs ? to_rs($expense_total) : $expense_total
}




// Example 
//$(document).ready(() => {
//  $total = html_td_total(document.querySelectorAll("[data-expense_amount]"), 'expense_amount')
//  document.getElementById("expense_total").innerText = $total;
//})
//<table>
//    <thead>
//        <th> # </th>
//        <th> amount </th>
//    </thead>
//    
//    <tbody>
//        <tr>
//            <th> # </th>
//            <th data-expense_amount="10" class > 10 </th>
//        </tr>
//        <tr>
//            <th> # </th>
//            <th data-expense_amount="20" > 10 </th>
//        </tr>
//    </tbody>
//    
//    <tfoot>
//        <td> </td>
//        
//        <td id="amount_total"> </td> // 20 
//    </tfoot>
//</table>


