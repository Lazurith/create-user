// style
import './App.css'
import { useState } from 'react'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'
import NewUserForm from './components/newuser/NewUserForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])
  // delete user
  const deleteUser = (id) => {
    // setUsers(users.filter((user) => user.id !== id))
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }
  // close modal
  const closeModal = (e) => {
    if (e.target.className === 'overlay')
      setShowModal(false)
    if (e.key === "Escape")
      setShowModal(false)
  }
  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUser={addUser}/>}
      <button onClick={() => { setShowModal(true) }} className='create-user'>Create Users</button>
      <Footer />
    </div>
  )
}

export default App
