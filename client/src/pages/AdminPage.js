import React from 'react';
import CreateCategory from '../components/CreateCategory/CreateCategory';
import DeleteCategory from '../components/DeleteCategory/DeleteCategory';
import CreateProduct from '../components/ProductAdmin/CreateProduct/CreateProduct';
import DeleteProduct from '../components/ProductAdmin/DeleteProduct/DeleteProduct';
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
    <CreateProduct/>
    <DeleteProduct/>
    </div>
    
  );
}

export default AdminPage;
