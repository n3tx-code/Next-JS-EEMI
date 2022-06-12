import '../static/css/style.css';
import Link from "next/link";
import ContactForm from '../components/contact-form';

const mobileMenuHandler = () => {
    document.querySelector(".navMenu").classList.toggle("navMenuActive");
    const navBar = document.querySelector(".navBar");
    if (navBar.style.height == '20vh') {
        navBar.style.height = '10vh';
    } else {
        navBar.style.height = '20vh';
    }

}

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="navBar">
                <div>
                    <div className="navMobileButton" onClick={mobileMenuHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navMenu">
                        <Link href={`/`}>
                            <a className="navBarLink">
                                Home
                            </a>
                        </Link>
                        <Link href={`/movies/`}>
                            <a className="navBarLink">
                                Movies
                            </a>
                        </Link>
                        <Link href={`/licence/`}>
                            <a className="navBarLink">
                                Licence
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Component {...pageProps} />
            <ContactForm />
        </>
    )
}