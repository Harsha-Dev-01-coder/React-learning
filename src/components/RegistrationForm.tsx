import { useForm, useFieldArray } from "react-hook-form";

interface RegistrationFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  phoneNumbers: {
    number: string;
  }[];
}

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    getValues,
    control,
  } = useForm<RegistrationFormData>({
    defaultValues: {
      name: "",
      age: 0,
      email: "",
      password: "",
      phoneNumbers: [{ number: "" }],
    },
  });

  // Dynamic phone numbers
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneNumbers",
  });

  // Async form submission
  async function onSubmit(data: RegistrationFormData) {
    console.log("Submitting...");

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submitted data:", data);

    reset();
  }

  // Watch password
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration Form</h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "Name is required",
        })}
      />

      {errors.name && <p>{errors.name.message}</p>}

      {/* Age */}
      <input
        type="number"
        placeholder="Age"
        {...register("age", {
          valueAsNumber: true,
          required: "Age is required",
          min: {
            value: 18,
            message: "Minimum age required 18",
          },
          max: {
            value: 100,
            message: "Maximum age is 100",
          },
        })}
      />

      {errors.age && <p>{errors.age.message}</p>}

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
        })}
      />

      {errors.email && <p>{errors.email.message}</p>}

      {/* Password */}
      <p>Password: {password}</p>

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />

      {errors.password && <p>{errors.password.message}</p>}

      {/* Dynamic Phone Numbers */}
      <h3>Phone Numbers</h3>

      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            type="tel"
            placeholder={`Phone Number ${index + 1}`}
            {...register(`phoneNumbers.${index}.number`, {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
          />

          {errors.phoneNumbers?.[index]?.number && (
            <p>{errors.phoneNumbers[index]?.number?.message}</p>
          )}

          <button
            type="button"
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ number: "" })}
      >
        Add Phone Number
      </button>

      {/* Submit */}
      <br />
      <br />

      <button type="submit">
        Submit
      </button>

      {/* Set Values */}
      <h3>Set Values</h3>

      <button
        type="button"
        onClick={() => setValue("name", "Champ")}
      >
        Set Name
      </button>

      <button
        type="button"
        onClick={() => setValue("age", 18)}
      >
        Set Age
      </button>

      <button
        type="button"
        onClick={() => setValue("email", "champ@gmail.com")}
      >
        Set Email
      </button>

      {/* Get Values */}
      <h3>Get Values</h3>

      <button
        type="button"
        onClick={() => console.log(getValues("name"))}
      >
        Get Name
      </button>

      <button
        type="button"
        onClick={() => console.log(getValues("age"))}
      >
        Get Age
      </button>

      <button
        type="button"
        onClick={() => console.log(getValues("email"))}
      >
        Get Email
      </button>

      <button
        type="button"
        onClick={() => console.log(getValues("phoneNumbers"))}
      >
        Get Phone Numbers
      </button>

      <button
        type="button"
        onClick={() => console.log(getValues())}
      >
        Get All Values
      </button>
    </form>
  );
}

export default RegistrationForm;