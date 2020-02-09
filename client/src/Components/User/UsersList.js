import React from 'react';
import MaterialTable from 'material-table';

// import ImageIcon from '@material-ui/icons/Image';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

function UsersList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 1: 'Tunis', 2: 'Ariana', 3:'Ben Arous' }
      }
    ],
    data: [
      {
        name: 'Hejer',
        surname: 'Laouani',
        birthYear: 1993,
        birthCity: 1
      },
      {
        name: 'Karim',
        surname: 'Gharbi',
        birthYear: 1993,
        birthCity: 3
      },
      {
        name: 'Yosr',
        surname: 'Lassoued',
        birthYear: 1993,
        birthCity: 2
      }
    ]
  });

  return (
    <div className="users-list">
    <MaterialTable
      title='Users List'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
          
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
    {/* <ImageIcon/>
    <EditIcon/>
    <DeleteIcon/> */}

    </div>
  );
}

export default UsersList;