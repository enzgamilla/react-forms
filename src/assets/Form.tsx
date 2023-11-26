import { FieldValues, useForm } from "react-hook-form";

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

  const { register, handleSubmit } = useForm();

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
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
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
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
