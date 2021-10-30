  //// Toggle Row (check, uncheck)
  $('#vehicles-table tbody').on('click', 'td', function (e) {
    const $tr = e.target.closest('tr')
    const $dt_row = $vehicles_table.row(this);
    $tr.classList.toggle("selected_row");

    if ($tr.classList.contains("selected_row")) {
      $tr.setAttribute("data-selected_row", $dt_row.data().id);
    } else {
      $tr.removeAttribute("data-selected_row");
    }
    // console.log($dt_row.data(), $dt_row.data().id)
    // console.log( $vehicles_table.cell( this ).data());
    // $vehicles_table.column( this ).data();
  })
      
  // View Assign agent Form (POP Modal)
  $("a.assign_vehicle_btn").click(function () {
    let $input_select_vehicles = document.getElementById("input_vehicles");
    let $ul = document.getElementById("ul_selected_rows");
    let $selected_rows = document.getElementsByClassName('selected_row')
    $ul.innerHTML = "";
    let $vehicles_ids = []
    for (const $row of $selected_rows) {
      let $td_value = `ID#${$row.cells[0].textContent}. ${$row.cells[4].textContent}, ${$row.cells[7].textContent}`;
      $vehicles_ids.push($row.cells[0].textContent);
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.appendChild(document.createTextNode($td_value));
      $ul.appendChild(li);
    }
    $input_select_vehicles.value = $vehicles_ids;
  });

//   <div class="modal fade" id="assign_vehicle" tabindex="-1" role="dialog">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <!-- MODEL TITLE -->
//         <h2 class="modal-title">  {{ @$modal_title  }} </h2>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true"> × </span>
//         </button>
//       </div>

//       <form action="{{route('vehicles.assign')}}" method="post" enctype="multipart/form-data" id="assign_vehicle_form">
//         <!-- MODEL BODY -->
//         <div class="modal-body">
//           <div id="model_data">
//             @csrf
//             <div class="row">
//               <label class="col-12">
//                 <select class="form-control" name="agent_id">
//                   @if(@$agents)
//                     <option value=""> Select Agent</option>
//                     @foreach($agents as $i)
//                       <option value="{{ $i->id }}">
//                         {{ $i->name }}
//                       </option>
//                     @endforeach
//                   @endif
//                 </select>
//               </label>
//             </div>
//             <br>
//             <div class="row">
//               <div class="col-12">
//                 <input type="hidden" name="vehicles" id="input_vehicles">
//                 <ul id="ul_selected_rows" class="list-group"></ul>
//               </div>
//             </div>
//           </div>
//           <div class="modal-footer">
//             <!-- The close button in the bottom of the modal -->
//             <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">
//               Cancel
//             </button>
//             <button type="submit" class="btn btn-sm btn-success" data-dismiss="modal"
//                     onclick="document.getElementById('assign_vehicle_form').submit();"
//             >
//               Process
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
