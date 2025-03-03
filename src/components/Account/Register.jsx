import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <div className="container">
        <div className="register">
          <div className="col-1">
            <h2>Register</h2>
            <span>Register now and enjoy our pizza 🍕</span>
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                {...register("userName", { required: true })}
                placeholder="Username"
                aria-label="Username"
              />
              {errors.userName && <p>Username is required.</p>}
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                aria-label="Email"
              />
              {errors.email && <p>Email ID is required.</p>}
              <input
                type="number"
                {...register("number", { required: true })}
                placeholder="mobile number"
                aria-label="Mobile Number"
              />
              {errors.number && <p>Mobile Number is required.</p>}
              <input
                {...register("password", { required: true })}
                type="text"
                placeholder="password"
                aria-label="Password"
              />
              {errors.password && <p>Password is required.</p>}

              <button className="btn">
                Register <FiArrowRight />
              </button>
            </form>
            <div className="login-account">
              Already have an account?{" "}
              <button
                className="login-btn"
                onClick={() => props.onformSwitch("Login")}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col-2">
            <img src="/images/login-img.jpg" alt="Pizza Illustration" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .register {
    max-width: 70rem;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #e9ecef;
    border-radius: 0.8rem;
    background-color: white;
    box-shadow: rgb(136, 136, 136) 0px 0px 5px 0px;
  }

  .register span {
    text-align: center;
    color: rgb(173, 181, 189);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.4rem 0 3rem;
    font-size: 1.2rem;
  }

  #form {
    max-width: 280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  #form > input,
  .btn {
    border: 1px solid #e9ecef;
    padding: 0.8rem 1rem;
  }

  #form > input:focus {
    outline: none;
  }

  #form > .btn {
    margin: 1.5rem 0;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 0.6rem;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    svg {
      font-size: 1.4rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  #form > input {
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    border-radius: 0.5rem;
    font-size: 1.2rem;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }

  .flex {
    display: flex;
    gap: 0.8rem;
  }

  .flex-col {
    flex-direction: column;
  }

  .register .col-1 {
    margin: auto;
    padding: 2rem 0;

    h2 {
      font-size: 2.5rem;
      text-align: center;
    }

    .register-account,
    .login-account {
      color: ${({ theme }) => theme.colors.black};
      font-size: 1.4rem;
      text-align: center;
      margin-top: 1.5rem;

      .register-btn,
      .login-btn {
        border: none;
        outline: none;
        background: transparent;
        color: ${({ theme }) => theme.colors.bg};
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        padding-left: 0.5rem;
      }
    }
  }

  .register .col-2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    align-self: flex-end;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    display: none;
  }

  form > p {
    color: darkred;
    opacity: 0.7;
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 0rem 0 0.8rem;
    font-weight: 400;
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .register {
      max-width: 60rem;
      margin: 3rem auto;
      border-radius: 0.6rem;
    }

    .register span {
      font-size: 1.1rem;
      margin: 0.3rem 0 2rem;
    }

    #form {
      max-width: 240px;
      padding: 0 1rem;

      input {
        padding: 0.8rem 1.2rem;
        font-size: 1.1rem;
        border-radius: 0.4rem;
      }

      .btn {
        margin: 1rem 0;
        padding: 0.8rem;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        gap: 0.3rem;

        svg {
          font-size: 1.2rem;
        }
      }
    }

    .register .col-1 {
      padding: 1.5rem 0;

      h2 {
        font-size: 2.2rem;
      }

      .register-account,
      .login-account {
        font-size: 1.2rem;
        margin-top: 1rem;

        .register-btn,
        .login-btn {
          font-size: 1.2rem;
          padding-left: 0.4rem;
        }
      }
    }

    form > p {
      font-size: 1rem;
      margin: 0rem 0 0.6rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .register {
      max-width: 70rem;
      margin: 4rem auto;
    }

    .register span {
      font-size: 1.2rem;
      margin: 0.4rem 0 3rem;
    }

    #form {
      max-width: 280px;
      padding: 0 1.5rem;

      input {
        padding: 1rem 1.5rem;
        font-size: 1.2rem;
      }

      .btn {
        padding: 1rem;
        font-size: 1.4rem;
        gap: 0.4rem;

        svg {
          font-size: 1.4rem;
        }
      }
    }

    .register .col-1 {
      padding: 2rem 0;

      h2 {
        font-size: 2.5rem;
      }

      .register-account,
      .login-account {
        font-size: 1.4rem;
        margin-top: 1.5rem;

        .register-btn,
        .login-btn {
          font-size: 1.4rem;
          padding-left: 0.5rem;
        }
      }
    }

    form > p {
      font-size: 1.2rem;
      margin: 0rem 0 0.8rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .register {
      max-width: 80rem;
      margin: 5rem auto;
      border-radius: 0.8rem;
    }

    .register span {
      font-size: 1.4rem;
      margin: 0.6rem 0 4rem;
    }

    #form {
      max-width: 320px;
      padding: 0 2rem;

      input {
        padding: 1.2rem 2rem;
        font-size: 1.4rem;
        border-radius: 0.5rem;
      }

      .btn {
        margin: 1.5rem 0;
        padding: 1.2rem;
        font-size: 1.5rem;
        border-radius: 0.6rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }

    .register .col-1 {
      padding: 3rem 0;

      h2 {
        font-size: 3rem;
      }

      .register-account,
      .login-account {
        font-size: 1.5rem;
        margin-top: 2rem;

        .register-btn,
        .login-btn {
          font-size: 1.5rem;
        }
      }
    }

    form > p {
      font-size: 1.4rem;
      margin: 0rem 0 1rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .register {
      max-width: 90rem;
      margin: 7rem auto;
      flex-direction: row;
    }

    .register span {
      font-size: 1.6rem;
      margin: 0.8rem 0 5rem;
    }

    #form {
      max-width: 380px;
      padding: 0rem;

      input {
        padding: 1.4rem 2.4rem;
        font-size: 1.6rem;
      }

      .btn {
        margin: 2rem 0;
        padding: 1.4rem;
        font-size: 1.6rem;
        border-radius: 0.8rem;
        gap: 0.5rem;

        svg {
          font-size: 1.6rem;
        }
      }
    }

    .register .col-1 {
      padding: 4rem;

      h2 {
        font-size: 3.5rem;
      }

      .register-account,
      .login-account {
        font-size: 1.6rem;

        .register-btn,
        .login-btn {
          font-size: 1.6rem;
          padding-left: 0.6rem;
        }
      }
    }

    .register .col-2 img {
      width: 35rem;
      height: 100%;
      object-fit: cover;
      align-self: flex-end;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      display: block;
    }

    form > p {
      font-size: 1.5rem;
      margin: 0rem 0 1.2rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .register {
      max-width: 100rem;
      margin: 2rem auto;
    }

    .register span {
      font-size: 1.6rem;
    }

    #form {
      max-width: 420px;

      input {
        padding: 1rem 1rem;
        font-size: 1.4rem;
      }

      .btn {
        padding: 1.2rem;
        font-size: 1.4rem;

        svg {
          font-size: 1.8rem;
        }
      }
    }

    .register .col-1 {
      h2 {
        font-size: 4rem;
      }

      .register-account,
      .login-account {
        font-size: 1.8rem;
        margin-top: 2.5rem;

        .register-btn,
        .login-btn {
          font-size: 1.8rem;
        }
      }
    }

    .register .col-2 img {
      width: 30rem;
    }

    form > p {
      font-size: 1.6rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .register {
      max-width: 110rem;
      margin: 11rem auto;
    }

    .register span {
      font-size: 2rem;
    }

    #form {
      max-width: 460px;

      input {
        padding: 1.8rem 2.8rem;
        font-size: 2rem;
      }

      .btn {
        padding: 1.8rem;
        font-size: 2rem;
        gap: 0.6rem;

        svg {
          font-size: 2rem;
        }
      }
    }

    .register .col-1 {
      padding: 5rem;

      h2 {
        font-size: 4.5rem;
      }

      .register-account,
      .login-account {
        font-size: 2rem;

        .register-btn,
        .login-btn {
          font-size: 2rem;
          padding-left: 0.8rem;
        }
      }
    }

    .register .col-2 img {
      width: 45rem;
    }

    form > p {
      font-size: 1.8rem;
      margin: 0rem 0 1.5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    .register {
      max-width: 120rem;
      margin: 13rem auto;
    }

    .register span {
      font-size: 2.2rem;
      margin: 1rem 0 6rem;
    }

    #form {
      max-width: 500px;

      input {
        padding: 2rem 3rem;
        font-size: 2.2rem;
        border-radius: 0.6rem;
      }

      .btn {
        margin: 2.5rem 0;
        padding: 2rem;
        font-size: 2.2rem;
        border-radius: 1rem;

        svg {
          font-size: 2.2rem;
        }
      }
    }

    .register .col-1 {
      h2 {
        font-size: 5rem;
      }

      .register-account,
      .login-account {
        font-size: 2.2rem;
        margin-top: 3rem;

        .register-btn,
        .login-btn {
          font-size: 2.2rem;
        }
      }
    }

    .register .col-2 img {
      width: 50rem;
    }

    form > p {
      font-size: 2rem;
      margin: 0rem 0 2rem;
    }
  }
`;

export default Register;