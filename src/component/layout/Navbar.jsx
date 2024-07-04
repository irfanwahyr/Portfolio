import Navigation from "../Element/Navbar/Navigation";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = section.offsetTop + section.clientHeight - 50;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveNav(section.getAttribute('id'));
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [open]);

    return (
        <nav className='fixed shadow-md w-full top-0 left-0 bg-bg-color py-3 z-10'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='cursor-pointer flex items-center gap-1'>
                    <a href="#" className="w-7 h-7 text-xl md:text-2xl lg:text-3xl text-text-color font-semibold font-poppins flex">
                        Irfan <span className="text-main-color"> .</span>
                    </a>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <i className='bx bx-x text-white text-3xl cursor-pointer' />
                            : <i className='bx bx-menu text-white text-3xl cursor-pointer' />
                    }
                </div>
                <ul className={`
                        md:flex text-white md:items-center md:pb-0 pb-12 lg:mx-10 absolute md:static
                        bg-bg-color md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
                        transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    <li className={`md:ml-8 md:my-0 my-7 font-semibold cursor-pointer ${activeNav === 'Home' ? 'text-main-color' : 'text-white'}`}>
                        <Navigation text='Home' setOpen={setOpen} />
                    </li>
                    <li className={`md:ml-8 md:my-0 my-7 font-semibold cursor-pointer ${activeNav === 'About' ? 'text-main-color' : 'text-white'}`}>
                        <Navigation text='About' setOpen={setOpen} />
                    </li>
                    <li className={`md:ml-8 md:my-0 my-7 font-semibold cursor-pointer ${activeNav === 'Experience' ? 'text-main-color' : 'text-white'}`}>
                        <Navigation text='Experience' setOpen={setOpen} />
                    </li>
                    <li className={`md:ml-8 md:my-0 my-7 font-semibold cursor-pointer ${activeNav === 'Portfolio' ? 'text-main-color' : 'text-white'}`}>
                        <Navigation text='Portfolio' setOpen={setOpen} />
                    </li>
                    <li className={`md:ml-8 md:my-0 my-7 font-semibold cursor-pointer ${activeNav === 'Contact' ? 'text-main-color' : 'text-white'}`}>
                        <Navigation text='Contact' setOpen={setOpen} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
