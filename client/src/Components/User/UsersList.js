import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  loadUser,
  addUser,
  editUser,
  deleteUser
} from '../../Js/actions/usersActions';

import MaterialTable from 'material-table';

import ImageIcon from '@material-ui/icons/Image';
import { Button } from '@material-ui/core';


function UsersList() {
  const { data, columns, isLoading } = useSelector(
    state => ({
      data: state.users.users,
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surName' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthPlace',
          lookup: { 1: 'Tunis', 2: 'Ariana', 3: 'Ben Arous' }
        }
      ],
      isLoading : state.users.isLoading,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <div className='users-list'>
      <MaterialTable
        title='Users List'
        columns={columns}
        data={data}
        isLoading={isLoading}
        editable={{
          //ADD USER
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                dispatch(addUser(newData));
              }, 600);
            }),

          //EDIT USER
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              // setTimeout(() => {
                resolve();
                console.log(oldData);
                dispatch(editUser(oldData._id, newData));
              // }, 300);
            }),

          //DELETE USER
          onRowDelete: oldData =>
            new Promise(resolve => {
              // setTimeout(() => {
                resolve();
                dispatch(deleteUser(oldData._id))
              // }, 600);
            }),

      
        }}
        //REDIRECT TO USER GALLERY
        actions={[
          {
            icon: 'image',
            tooltip: 'Show User Gallery',
            onClick: (event, rowData) => {
              // Do save operation
            }
          }
        ]}
      />
   
    </div>
  );
}

export default UsersList;
