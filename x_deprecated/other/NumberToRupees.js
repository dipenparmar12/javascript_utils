//  Number to ruppee converter 
function to_rs($number, $locate = 'en-IN') {
  return (!isNaN(parseInt($number))) ? /*'₹' + */ parseInt($number).toLocaleString($locate) : 0
}

