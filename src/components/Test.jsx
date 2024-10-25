const test = () => {
  return (
    <div className="container mt-5">
    <h2 className="text-center">List Warehouse</h2>
    
    <table className="table table-striped table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>ID</th>
                <th>Warehouse Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Warehouse A</td>
                <td>New York</td>
                <td>1000 m²</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Warehouse B</td>
                <td>Los Angeles</td>
                <td>1500 m²</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Warehouse C</td>
                <td>Chicago</td>
                <td>1200 m²</td>
                <td>Inactive</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Warehouse D</td>
                <td>Houston</td>
                <td>800 m²</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Warehouse E</td>
                <td>Miami</td>
                <td>900 m²</td>
                <td>Inactive</td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default test