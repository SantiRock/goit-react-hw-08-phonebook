import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import css from "./RegisterForm.module.css";
import { Button, TextField } from "@mui/material";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value
            })
        );
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                <p>Username</p>
                <TextField type="text" name="name" size="small"/>
            </label>
            <label className={css.label}>
                <p>Email</p>
                <TextField type="email" name="email" size="small"/>
            </label>
            <label className={css.label}>
                <p>Password</p>
                <TextField type="password" name="password" size="small"/>
            </label>
            <Button type="submit" variant="contained">Register</Button>
      </form>
    );
};

