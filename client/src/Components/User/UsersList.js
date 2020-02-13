import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  loadUser,
  addUser,
  editUser,
  deleteUser
} from '../../Js/actions/usersActions';

import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    margin: 20
  },
}))

function UsersList() {
  const classes = useStyles();
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
          type: 'text',
        }
      ],
      isLoading : state.users.isLoading,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
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
            tooltip: 'Redirect to User Gallery',
             onClick: (event, rowData) => window.location.href= `/${rowData._id}` 
          }
        ]}

        //ACTIONS DISPLAY
        options={{
          actionsColumnIndex: -1
        }}
      />
   
    </div>
  );
}

export default UsersList;
