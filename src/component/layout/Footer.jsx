import { useState, useEffect } from 'react';
import { COPYRIGHT } from '../../constant';

const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;

            if (scrollPosition > totalHeight - windowHeight * 1.2) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className='text-white flex items-center justify-between flex-wrap p-6 bg-bg-color'>
            <div className="flex justify-start mb-4 md:mb-0">
                <p className="text-m font-poppins font-bold">&copy; {COPYRIGHT.year} by Irfan | All Rights reserved.</p>
            </div>
            <div className="flex justify-end">
                {showScrollButton && (
                    <a href="#home" className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-main-color text-white rounded-full shadow-lg z-50 hover:bg-opacity-80 focus:outline-none" onClick={scrollToTop}>
                        <i className='bx bx-up-arrow-alt text-white text-2xl md:text-3xl lg:text-4xl' />
                    </a>
                )}
            </div>
        </footer>

    );
}

export default Footer;
