import './App.css'
import React from 'react';
import { useState } from 'react';
import Users from './components/User/Users';
import AddUser from './components/User/AddUser';
import EditUserModal from './components/User/EditUserModal'
import DeleteUserModal from './components/User/DeleteUserModal'

function App() {

  const [shouldEditUserModalBeOpened, setShouldEditUserModalBeOpened] = useState(false)
  const [shouldDeleteUserModalBeOpened, setShouldDeleteUserModalBeOpened] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const [regularUsers, setRegularUsers] = useState(
    [
      {
        username:  'Sevo',
        country: 'Serbia',
        city: 'Cacak',
        age: 21,
        id: "1",
        key: "1",
      },
  
      {
        username:  'Sevo2',
        country: 'Serbia',
        city: 'Cacak',
        age: 22,
        id: "2",
        key: "2",
      },
  
      {
        username:  'Sevo3',
        country: 'Serbia',
        city: 'Cacak',
        age: 23,
        id: "3",
        key: "3",
      }
    ]
  )
    

  const addNewUser = newUserData =>  {
    setRegularUsers(prev => {
      return [
          newUserData,
          ...prev
        ]
    })
  }

  const deleteUser = id => {
    setRegularUsers(prev => {
      return (
        prev.filter(user => user.id !== id)
      )
    })
  }

  const editUser = (userData, id) => {
    setRegularUsers(prev => {
      prev.forEach((user, indx) => {
        if(user.id === id) {
          prev[indx] = userData
          arraymove(prev, indx, 0)
        }
      })
      return prev
    })
  }


  function arraymove(arr, fromIndex, toIndex) {
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
  }

  const openEditUserModal = (id) => {
    setSelectedUser(regularUsers.filter(user => user.id === id))
    setShouldEditUserModalBeOpened(prev => {
        return (true)
    })
  }

  const closeEditUserModal = () => {
    setShouldEditUserModalBeOpened(prev => {
        return (false)
    })
  }

  const openDeleteUserModal = (id) => {
    setSelectedUser(regularUsers.filter(user => user.id === id))
    setShouldDeleteUserModalBeOpened(prev => {
        return (true)
    })
  }

  const closeDeleteUserModal = () => {
    setShouldDeleteUserModalBeOpened(prev => {
        return (false)
    })
  }

  return (
    <div className="App">
      <AddUser addNewUser={addNewUser} />
      <Users openDeleteUserModal={openDeleteUserModal} openEditUserModal={openEditUserModal} deleteUser={deleteUser} users={regularUsers} />
      {shouldDeleteUserModalBeOpened ? <DeleteUserModal deleteUser={deleteUser} closeUserModal={closeDeleteUserModal} user={selectedUser}  /> : null}
      {shouldEditUserModalBeOpened ? <EditUserModal editUser={editUser} closeUserModal={closeEditUserModal} user={selectedUser}  /> : null}
    </div>
  );
}

export default App;
