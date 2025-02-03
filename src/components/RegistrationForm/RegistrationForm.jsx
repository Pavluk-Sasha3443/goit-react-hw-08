import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { toast } from "react-hot-toast";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome to Phone Book, ${res.user.name}`);
      })
      .catch(() => {
        toast.error("Oops! Registration didn't go through. Please try again.");
        options.resetForm();
      });
  };

  const registerSchema = Yup.object({
    name: Yup.string().required("Please enter your name to create an account"),
    email: Yup.string()
      .email("Please enter email!")
      .required("We need your email address to create an account"),
    password: Yup.string()
      .min(8, "Your password should be at least 8 characters long for security")
      .max(20, "Too Long!")
      .required("Please create a password to secure your account"),
  });

  return (
    <div className={css.formWrapper}>
      <h2 className={css.title}>Welcome to Phone Book</h2>
      <p className={css.message}>
        We're glad to see you. Please, create your account
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={css.list}>
            <label className={css.label}>
              Name
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage className={css.error} name="name" component="div" />
            </label>
          </div>
          <div className={css.list}>
            <label className={css.label}>
              Email
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="div"
              />
            </label>
          </div>
          <div className={css.list}>
            <label className={css.label}>
              Password
              <Field
                className={css.input}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                className={css.error}
                name="password"
                component="div"
              />
            </label>
          </div>
          <div className={css.btnContainer}>
            <button className={css.button} type="submit">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
