import { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import registerSchema from '../validations/validate-register';
import validateRegister from '../validations/validate-register';

const initial = {
  firstName: '',
  lastName: '',
  emailOrMobile: '',
  password: '',
  confirmPassword: ''
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const handleFormSubmit = e => {
    e.preventDefault();
    const validateError = validateRegister(input);
    if (validateError) {
      console.log(validateError)
      return setError(validateError);
    }

    onSuccess();
  };

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-2 p-4 gap-4">
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
            errorMessage={error.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
            errorMessage={error.lastName}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
            errorMessage={error.emailOrMobile}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            type="password"
            errorMessage={error.password}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Confirm password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            type="password"
            errorMessage={error.confirmPassword}
          />
        </div>
        <div className="col-span-full text-center">
          <Button bg="green" color="white">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}
