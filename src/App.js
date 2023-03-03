import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>Please Register</h1>
      <div className="form-div">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "This is required",
              },

              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: "This is not a valid email format!",
              },
            })}
            placeholder="Email"
          />

          <p>{errors.email?.message}</p>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password cannot be less than 4 characters",
              },
              maxLength: {
                value: 10,
                message: "Password should not exceed 10 characters",
              },
            })}
            placeholder="Password"
          />

          <p>{errors.password?.message}</p>
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
