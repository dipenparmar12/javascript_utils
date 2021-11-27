// function deleteRow(table, rowid)
// {
//     var row = document.getElementById(rowid);
//     row.parentNode.removeChild(row);
// }

function deleteRow(rowid)
{
    var row = document.getElementById(rowid);
    var table = row.parentNode;
    while ( table && table.tagName != 'TABLE' )
        table = table.parentNode;
    if ( !table )
        return;
    table.deleteRow(row.rowIndex);
}
