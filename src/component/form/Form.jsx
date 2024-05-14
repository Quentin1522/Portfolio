import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../form/form.scss';

function AnimatedInput({ name, label, type = "text", value = '', onChange }) {
    return (
        <div className="bloc">
            <label htmlFor={name}>{label}</label>
            <div className="input-cover">
                <div className="input-background"></div>
                {value.split('').map((char, index) => (
                    <span key={index} className="letter-animate">
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
                <input
                    className="hidden-input"
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

function Form() {
    const [email, setEmail] = useState('');
    const [objet, setObjet] = useState('');
    const [emailError, setEmailError] = useState(null);

    // Remplacez "YOUR_FORMSPREE_ID" par votre véritable identifiant.
    const [state, handleSubmit] = useForm("mpzvnyge");

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        // Validation regex pour l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("L'adresse email est invalide.");
        } else {
            setEmailError(null);
        }
    };

    const handleObjetChange = (event) => {
        setObjet(event.target.value);
    };

    if (state.succeeded) {
        return <p>Votre message a été envoyé avec succès !</p>;
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <AnimatedInput
                name="email"
                label="Email :"
                type="email"
                value={email}
                onChange={handleEmailChange}
            />
            {emailError && <p className='validation-erreur'>{emailError}</p>}
            
            <AnimatedInput
                name="objet"
                label="Objet :"
                value={objet}
                onChange={handleObjetChange}
            />

            <div className="bloc">
                <label htmlFor="message">Message : </label>
                <textarea className="message" id="message" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button className="submit" type="submit" disabled={state.submitting || emailError}>
                Envoyer
            </button>
        </form>
    );
}

export default Form;
