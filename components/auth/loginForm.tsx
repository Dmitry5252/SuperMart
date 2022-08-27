import Axios from "axios";
import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { baseURL } from "../../config/axiosInstance";
import AppContext from "../../context";
import { logIn } from "../../context/actions/actionCreators";

const Title = styled.h2`
  font-size: 1.125rem;
  font-family: Raleway;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

const Form = styled.form`
  width: 48%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 880px) {
    width: 100%;
  }

  input {
    width: 100%;
    height: 2.8125rem;
    border: 0.0625rem solid #e8e8e8;
    outline: none;
    border-radius: 0.125rem;
  }

  label {
    font-family: Roboto;
    color: #666666;
    font-size: 0.875rem;
    margin-bottom: 0.75rem;

    span {
      font-family: Poppins;
      color: #fc4242;
    }
  }
  button {
    margin-top: 0.125rem;
    margin-bottom: 2rem;
    width: 5.625rem;
    height: 2.8125rem;
    border: 0.0625rem solid #e8e8e8;
    border-radius: 0.125rem;
    background-color: #eeeeee;
    color: #888888;
    font-size: 0.75rem;
    font-family: Raleway;
    font-weight: 600;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 1.3125rem;
`;

const Error = styled.div`
  color: #fc4242;
`;

type Inputs = {
  email: string;
  password: string;
  submit: string;
};

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<Inputs>();

  const { dispatch } = useContext(AppContext);

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    try {
      const { data } = await Axios.post(
        `${baseURL}login`,
        {
          email: inputs.email,
          password: inputs.password,
        },
        { withCredentials: true }
      );
      dispatch(logIn());
      router.push("/");
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status == 400) {
        setError("submit", { type: "submit", message: "Invalid email or password" });
      } else if (Axios.isAxiosError(e)) {
        setError("submit", { type: "submit", message: "Network error" });
      }
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>REGISTERED CUSTOMER</Title>

      <label htmlFor="email">
        Email<span>*</span>
      </label>
      <InputWrapper>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
        />
        {errors.email && <Error>Enter a valid email</Error>}
      </InputWrapper>
      <label htmlFor="password">
        Password<span>*</span>
      </label>
      <InputWrapper>
        <input
          type="password"
          id="password"
          {...register("password", { required: true, minLength: 3 })}
        />
        {errors.password && <Error>Enter a valid password</Error>}
      </InputWrapper>
      {errors.submit && <Error>{errors.submit.message}</Error>}
      <button onClick={() => clearErrors("submit")} type="submit">
        LOGIN
      </button>
    </Form>
  );
};

export default LoginForm;
