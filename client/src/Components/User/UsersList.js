import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  loadUser,
  addUser,
  editUser,
  deleteUser
} from '../../Js/actions/usersActions';

import MaterialTable from 'material-table';

// import AddBoxIcon from '@material-ui/icons/AddBox';
// import ImageIcon from '@material-ui/icons/Image';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

class UsersList extends Component {
  state = {
    // name:'',
    // surName:'',
    // birthYear:'',
    // birthPlace:'',
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surName' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthPlace',
        lookup: { 1: 'Tunis', 2: 'Ariana', 3: 'Ben Arous' }
      },
      { title: 'Actions' }
    ],
    users: []
  };

  componentDidMount = () => {
    this.setState({ users: loadUser() });
    console.log(this.props.users.users);
  };

  render() {
    const users =
      this.props.users && this.props.users.users ? this.props.users.users : [];
    return (
      <div className='users-list'>
        <MaterialTable
          title='Users List'
          columns={this.state.columns}
          users={users}
          editable={{
            //ADD USER
            onRowAdd: newUser => {
              this.props.addUser(newUser);
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState(() => {
                    const users = [...users];
                    users.push(newUser);
                    return { users };
                  });
                }, 600);
              });
            }

            //EDIT USER

            // onRowUpdate: (newData, oldData) =>
            //   new Promise(resolve => {
            //     setTimeout(() => {
            //       resolve();
            //       if (oldData) {
            //         setState(prevState => {
            //           const data = [...prevState.data];
            //           data[data.indexOf(oldData)] = newData;
            //           return { ...prevState, data };
            //         });
            //       }
            //     }, 600);
            //   }),

            //DELETE USER

            // onRowDelete: oldData =>
            //   new Promise(resolve => {
            //     setTimeout(() => {
            //       resolve();
            //       setState(prevState => {
            //         const data = [...prevState.data];
            //         data.splice(data.indexOf(oldData), 1);
            //         return { ...prevState, data };
            //       });
            //     }, 600);
            //   })
          }}
        />
        {/* <ImageIcon/>
    <EditIcon/>
    <DeleteIcon/> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, {
  loadUser,
  addUser,
  editUser,
  deleteUser
})(UsersList);
