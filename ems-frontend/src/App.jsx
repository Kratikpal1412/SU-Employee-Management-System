import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <main className='py-3'>
    <Routes>
      {/* // http://localhost:8081/ */}
      <Route path = '/home' element = {<ListEmployeeComponent/>}></Route>
      {/* // http://localhost:8081/employees */}
      <Route path = '/employees' element = {<ListEmployeeComponent/>}></Route>
      {/* // http://localhost:8081/add-employee */}
      <Route path = '/add-employee' element = {<EmployeeComponent/>}></Route>
       {/* // http://localhost:8081/edit-employee/1 */}
       <Route path = '/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
          
    </Routes>
    </main>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
