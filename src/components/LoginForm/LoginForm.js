import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import css from "./LoginForm.module.css";
import { Button, TextField } from "@mui/material";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                <p>Email</p>
                <TextField type="email" name="email" size="small"/>
            </label>
            <label className={css.label}>
                <p>Password</p>
                <TextField type="password" name="password" size="small"/>
            </label>
            <Button type="submit" variant="contained" size="small">Log In</Button>
        </form>
    );
};

