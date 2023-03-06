
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function LoginForm() {

  return (
    <div className="LoginForm">
      <form>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder='First name' />
        </FormControl>
      </form>
    </div>
  )
};

export default LoginForm;