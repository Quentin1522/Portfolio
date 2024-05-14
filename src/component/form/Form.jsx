import { useState } from 'react';
import '../form/form.scss';

// Ce composant gère un champ de formulaire animé où chaque lettre tapée est animée.
function AnimatedInput({ name, label }) {
    // Un état local pour stocker la valeur de l'input.
    const [value, setValue] = useState('');

    // Fonction pour gérer le changement de l'input. Met à jour l'état avec la nouvelle valeur.
    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        // Bloc qui englobe chaque groupe label + input.
        <div className="bloc">
            {/* Label pour l'input, associé à l'input via 'htmlFor'. */}
            <label htmlFor={name}>{label}</label>
            {/* Div qui contient l'animation et l'input. */}
            <div className="input-cover">
                {/*barre rouge*/}
                <div className="input-background"></div> 
                {/* Divise la valeur de l'input en lettres, et applique une animation à chaque lettre. */}
                {value.split('').map((char, index) => (
                    <span key={index} className="letter-animate">
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
                {/* Input réel mais rendu transparent pour permettre de voir les lettres animées. */}
                <input
                    className="hidden-input"
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

function Form() {
    return (

        <form className="form">

            <AnimatedInput name="name" label="Nom & Prénom :" />
            <AnimatedInput name="objet" label="Objet :" />

            <div className="bloc">
                <label htmlFor="message">Message : </label>
                <textarea className="message" id="message" name="message" />
            </div>

            <input className="submit" type="submit" value="Envoyer" />
        </form>
    );
}

export default Form;
