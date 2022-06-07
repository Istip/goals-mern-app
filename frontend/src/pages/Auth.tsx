import { useState, ChangeEvent, FormEvent } from 'react';

interface IAuth {
  name: string;
  email: string;
  password: string;
}

function Auth() {
  const [formData, setFormData] = useState<IAuth>({
    name: '',
    email: '',
    password: '',
  });
  const [type, setType] = useState('register');

  const { name, email, password } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.currentTarget.name]: String(e.currentTarget.value),
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          id="name"
          name="name"
          onChange={onChange}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email: </label>
        <input
          type="text"
          value={email}
          id="email"
          name="email"
          onChange={onChange}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={password}
          id="password"
          name="password"
          onChange={onChange}
          placeholder="Enter your password"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Auth;
