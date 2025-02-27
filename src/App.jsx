import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DepartmentComponent from './components/DepartmentComponent'
import Test from './components/test'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhost:3000 */}
              <Route path='/' element = { <ListEmployeeComponent />}></Route>
              {/* // http://localhost:3000/employees */}
              <Route path='/employees' element = { <ListEmployeeComponent /> }></Route>
              {/* // http://localhost:3000/add-employee */}
              <Route path='/add-employee' element = { <EmployeeComponent />}></Route>

              {/* // http://localhost:3000/edit-employee/1 */}
              <Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>

              <Route path='/departments' element = { <ListDepartmentComponent /> }></Route>

              <Route path='/add-department' element = { <DepartmentComponent />}  />

              <Route path="/edit-department/:id" element={<DepartmentComponent />} />

              <Route path='/test' element = { <Test /> } />

          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App