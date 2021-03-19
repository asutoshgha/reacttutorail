import React, {Component} from 'react'
const TableBody = (props) => {
  const rows = props.charecterdata.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <button onClick={() => props.removeitem(index)}>Delete</button>
      </tr>
    )
  })

  return(<tbody>
    {rows}
    </tbody>)
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

class Table extends Component {

  render() {
    const {charecterdata, removeitem} = this.props
    return (
      <table>
        <TableHeader/>
        <TableBody charecterdata={charecterdata} removeitem={removeitem}/>
      </table>
    )
  }
}

export default Table;
