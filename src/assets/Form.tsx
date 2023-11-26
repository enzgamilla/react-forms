import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  //   const handleFormSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  // if (nameRef.current !== null) person.name = nameRef.current?.value;
  // if (ageRef.current !== null) person.age = parseInt(ageRef.current?.value);

  // console.log(person);
  //     console.log(person);
  //   };

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);

  const onSubmitData = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, name: event.target.value });
          //   }}
          //   value={person.name}
          {...register("name", { required: true, maxLength: 30 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The Name field is required</p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="text-danger">The must have only 30 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, age: event.target.value });
          //   }}
          //   value={person.age}
          {...register("age", { required: true, min: 18 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The Name field is required</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">The age must be 18 and above</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
