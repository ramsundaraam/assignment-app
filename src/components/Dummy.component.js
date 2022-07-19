import { useState, useEffect } from "react"

const DummyComponent = () => {

  const [tasks,settasks] = useState([{isLoading: true, display: true, width: 98}])

  useEffect( () => {
    const fetchtasks = async () => {
      const res = await fetch('http://localhost:3000/posts')
      const data = await res.json() ;
      settasks(data)
      
    }
    console.log(fetchtasks())

  },[] )



  return (
<>

    <h1>the below table data is from db.json server, i fetched the value but i struck in image displaying.</h1>
    <table>
      <thead>
      <tr>
        <th>TASK TITLE</th>
        <th>Email</th>
      </tr>
      </thead>

    <tbody>
    { tasks.map( (task) => (
      <tr key={task.id}>
      <td> { task.name } </td>
      <td> { task.email } </td>
      </tr>
    ) ) }
    </tbody>
    </table>

    </>
  )
}

export default DummyComponent