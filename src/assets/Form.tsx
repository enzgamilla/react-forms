import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface FormData {
//   name: string;
//   age: number;
// }

const schema = z.object({
  name: z
    .string()
    .max(30, { message: "The maximum character for name is 30" })
    .min(1, { message: "Name must not be empty" })
    .toUpperCase(),
  age: z
    .number({
      invalid_type_error: "Age field is required",
    })
    .min(18, { message: "You must be in legal age" }),
});

type FormData = z.infer<typeof schema>;

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
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
