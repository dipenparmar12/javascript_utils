
//   <a href='#view-$id'  
//     data-id='$id'
//     class='select_row m-1 vehicle_view_btn'
//     >
//   <i class='fas fa-eye'></i>
// </a> 


$('table').on('click', 'a.vehicle_view_btn', function (e) {
  // console.log(e)
  let $vehicle_id = $(this).data('id');
  let $table_body = $("#show_vehicle_tbody");
  $.get(`{{ route('api.vehicle.get') }}/ ${$vehicle_id}`, function (data, status) {
    // console.log(data)
    if (data) {
      $table_body.empty();
      for (let prop in data) {
        // console.log(`${prop} = ${data[prop]}`);
        value = data[prop] ? data[prop] : "";
        prop = prop.replaceAll("_", " ")
        $table_body.append(`<tr> <td> ${prop} </td> <td> ${value} </td> </tr>`)
      }
    }
  });
});


////// Loop 2


$('table').on('click', 'a.vehicle_view_btn', function (e) {
  // console.log(e)
  let $vehicle_id = $(this).data('id');
  let $table_body = $("#show_vehicle_tbody");
  $.get(`{{ route('api.vehicle.get') }}/ ${$vehicle_id}`, function (data, status) {
    // console.log(data)
    if (data) {
      $table_body.empty();
      for (var prop of Object.keys(data)) {
        if (data.hasOwnProperty(prop)) {
          value = data[prop] ? data[prop] : "";
          prop = prop.replaceAll("_", " ")
          $table_body.append(`<tr> <td> ${prop} </td> <td> ${value} </td> </tr>`)
        }
      }
    }
  });
});