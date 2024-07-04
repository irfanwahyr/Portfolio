import { Link } from 'react-scroll';

const Navigation = (props) => {
    const { text, setOpen, } = props;

    const handleNavbar = () => {
        if (text === "Home") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setOpen(false);
    };

    return (
        <Link
            to={text}
            smooth={true}
            duration={500}
            offset={-48}
            onClick={handleNavbar}
            className='
                text-sm md:text-base lg:text-lg hover:text-main-color
                duration-500 font-poppins font-semibold
            '>
            {text}
        </Link>
    )
}

export default Navigation;
