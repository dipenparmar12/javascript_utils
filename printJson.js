const printJson = (value, fontSize = 14, ...rest) => (
  <pre
    style={{
      color: '#000',
      fontSize: fontSize + 'px',
      borderBottom: '1px solid red',
      marginBottom: '5px'
    }}
    {...rest}
  >
    {JSON.stringify(value, null, 4)}
  </pre>
)

export default printJson
