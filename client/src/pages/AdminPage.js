import React from 'react';
import CreateCategory from '../components/CreateCategory/CreateCategory';
import DeleteCategory from '../components/DeleteCategory/DeleteCategory';
import UpdateCategory from '../components/UpdateCategory/UpdateCategory';

const AdminPage = () => {
  return (
    <div>
      <div>
      AdminPage
    </div>
    <CreateCategory/>
    <DeleteCategory/>
    <UpdateCategory/>
    </div>
    
  );
}

export default AdminPage;
