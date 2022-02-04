import {useState} from "react";

const Form = ({getFiler}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {[e.target.name]: e.target.value};
        setForm({...form, ...eventData});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getFiler(form);
    }

    return (
        <div>
            <form>
                <label>Name: <input type='text' name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>Username: <input type='text' name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>Email: <input type='text' name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={onSubmit}>Filter</button>
            </form>
        </div>
    );
};

export default Form;