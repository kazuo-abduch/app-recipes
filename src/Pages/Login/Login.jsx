import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Components/Input';
import './Login.css';
import Button from '../../Components/Button';
import Form from '../../Components/Form';
import LoginContainer from '../../Components/LoginContainer/LoginContainer';
import LoginHeader from '../../Components/LoginContainer/LoginHeader';
import LoginFormFieldsContainer from
'../../Components/LoginContainer/LoginFormFieldsContainer';
import backgroundAsset from '../../Assets/background-login.jpg';

function Login({ history }) {
  const [user, setUser] = useState({
    email: '',
    senha: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const { email, senha } = user;
  const minLen = 6;

  useEffect(() => {
    if (email === 'email@mail.com' && senha.length > minLen) {
      setIsDisabled(false);
    }
  }, [email, senha]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <section
      className="vh-100 login__container"
      style={ { backgroundImage: `url(${backgroundAsset})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      } }
    >
      <LoginContainer>
        <LoginHeader />
        <Form formClass="form-outline mb-4" formMethod={ handleSubmit }>
          <LoginFormFieldsContainer>
            {/* Input de Email */}
            <Input
              inputClass="form-control form-control-lg text-center"
              inputTestId="email-input"
              inputType="email"
              inputName="email"
              inputPlaceHolder="Email"
              inputValue={ email }
              inputMethod={ handleChange }
            />
          </LoginFormFieldsContainer>

          <LoginFormFieldsContainer>
            {' '}
            {/* Input de Senha */}
            <Input
              inputClass="form-control form-control-lg text-center"
              inputTestId="password-input"
              inputType="password"
              inputName="senha"
              inputPlaceHolder="Password"
              inputValue={ senha }
              inputMethod={ handleChange }
            />
          </LoginFormFieldsContainer>

          {/* Botao Enter */}
          <Button
            btnClass={
              isDisabled ? 'btn-lg login__button__disabled btn-block'
                : 'btn-lg login__button btn-block'
            }
            btnTestId="login-submit-btn"
            btnType="submit"
            btnText="Enter"
            btnDisabled={ isDisabled }
          />
        </Form>
      </LoginContainer>
    </section>
  );
}

Login.defaultProps = {
  history: {},
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Login;
