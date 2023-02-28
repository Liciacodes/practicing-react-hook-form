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
      firstName: "",
      lastName: "",
      age: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>Please Register</h1>
      <div className="form-div">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min Length is 4",
              },
            })}
            placeholder="First Name"
          />

          <p>{errors.firstName?.message}</p>
          <input
            {...register("lastName", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min Length is 4",
              },
            })}
            placeholder="Last Name"
          />

          <input type="number" {...register("age", { valueAsNumber: true })} />
          <p>{errors.lastName?.message}</p>
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
