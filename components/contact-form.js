import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mgedqnlg");

    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="contactFormWrapper">
            <h2>
                Contact form
            </h2>
            <div className="contactFormEmail">
                <label htmlFor="email">Email Address : </label>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="contactFormMessage">
                <label htmlFor="message">Message : </label>
                <textarea id="message" name="message" rows="4" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="contactFormSubmit">
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
                <ValidationError errors={state.errors} />
            </div>
        </form>
    );
}
