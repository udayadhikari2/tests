
import * as React from 'react';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
function LoginForm() {
  return (
    <div className="LoginForm">
      <form className='p-20 m-10'>
        <FormControl className='p-20 m-10' isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder='First name' />
          <FormLabel>Middle Name</FormLabel>
          <Input placeholder='Middle Name' />
          <FormLabel>Last name</FormLabel>
          <Input placeholder='Last name' />
        </FormControl>
       
      </form>
    </div>
  )
};

export default LoginForm;