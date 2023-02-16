/**
 * Parses a CSV string into an array of JSON objects.
 * @param {string} csvString - The CSV string to parse.
 * @param {Object} options - The options object.
 * @param {string} [options.delimiter=','] - The delimiter to use for separating fields.
 * @param {string} [options.quote='"'] - The quote character to use for field values.
 * @param {boolean} [options.includeHeader=true] - Whether to include the first line as the header row.
 * @returns {Object[]} - An array of JSON objects representing the CSV data.
 */
function csvToJson(csvString, options = {}) {
  const {
    delimiter = ',',
    quote = '"',
    includeHeader = true
  } = options;

  const lines = csvString.split('\n').map(line => line.trim());

  let headers = includeHeader ? lines.shift().split(delimiter).map(header => header.trim()) : null;

  return lines.map(line => {
    const values = line.split(delimiter).map(value => value.trim());

    if (quote) {
      values.forEach((value, i) => {
        if (value.startsWith(quote) && value.endsWith(quote)) {
          values[i] = value.slice(1, -1);
        }
      });
    }

    const obj = {};

    values.forEach((value, i) => {
      const header = headers ? headers[i] : i;
      obj[header] = value;
    });

    return obj;
  });
}


/*
const csvString = 'Name, Age, Country\nAlice, 25, USA\nBob, 30, Canada';
const options = { delimiter: ',', hasHeaderRow: true };
const jsonData = csvToJson(csvString, options);
console.log(jsonData);

[  { Name: 'Alice', Age: '25', Country: 'USA' },  { Name: 'Bob', Age: '30', Country: 'Canada' }]

*/


// /**
//  * Converts a CSV file to a JSON object.
//  * @param {string} csv - The CSV file content to convert.
//  * @param {Object} [options] - The conversion options.
//  * @param {string} [options.delimiter=','] - The CSV delimiter character.
//  * @param {boolean} [options.hasHeader=true] - Whether the CSV file has a header row.
//  * @param {Array} [options.header=[]] - The header row for the CSV file, if not present in the file.
//  * @param {Function} [options.transform] - A function to transform each row of data.
//  * @returns {Array} - The converted JSON object.
//  */
// function csvToJsonV2(csv, options = {}) {
//   const {
//     delimiter = ',',
//     hasHeader = true,
//     header = [],
//     transform,
//   } = options;

//   const lines = csv.trim().split('\n');

//   const headers = hasHeader
//     ? lines.shift().split(delimiter)
//     : header;

//   const result = lines.map(line => {
//     const values = line.split(delimiter);

//     const row = headers.reduce((obj, header, index) => {
//       obj[header] = values[index];
//       return obj;
//     }, {});

//     if (transform) {
//       return transform(row);
//     }

//     return row;
//   });

//   return result;
// }

/*
// Example usage with a custom delimiter and header row
const csvData = `name|age|gender
John|32|M
Jane|25|F
`;

const options = {
  delimiter: '|',
  header: ['name', 'age', 'gender']
};

const jsonData = csvToJsonV2(csvData, options);
console.log(jsonData);
// Output: [{name: 'John', age: '32', gender: 'M'}, {name: 'Jane', age: '25', gender: 'F'}]

// Example usage with a data transform function
const csvData2 = `name,age,gender
John,32,M
Jane,25,F
`;

const options2 = {
  transform: row => ({ name: row.name.toUpperCase(), age: Number(row.age), gender: row.gender })
};

const jsonData2 = csvToJsonV2(csvData2, options2);
console.log(jsonData2);
// Output: [{name: 'JOHN', age: 32, gender: 'M'}, {name: 'JANE', age: 25, gender: 'F'}]
*/