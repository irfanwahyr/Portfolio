import { Link } from "../../../constant";

const ButtonSosmed = () => {

    const openPdfFile = () => {
        const pdfFilePath = 'https://github.com/irfanwahyr/Portfolio/blob/main/src/assets/file/ATS-CV-IRFAN-Complete.pdf';
        window.open(`${pdfFilePath}`, '_blank');
    };

    return (
        <>
            <div className="flex justify-center pt-2">
                {Link.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18
                            bg-transparent border-[0.1rem] border-main-color rounded-full
                            mx-6 mb-4 transition duration-500 ease-in-out hover:bg-main-color
                            hover:shadow-main-color"
                    >
                        <i className={`bx ${link.iconClass} text-main-color text-2xl md:text-3xl lg:text-4xl hover:text-white transition duration-500 ease-in-out`} />
                    </a>
                ))}
            </div>
            <div className="flex justify-center pt-2">
            <button
                onClick={openPdfFile}
                className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4
                    bg-second-bg-color text-white border border-main-color rounded-2xl
                    mx-6 mb-4 hover:bg-opacity-80 focus:outline-none focus:bg-opacity-80 hover:shadow-lg
                    transition duration-300 hover:bg-main-color"
            >
                <p className="text-sm md:text-base lg:text-lg font-poppins p-1">Download CV</p>
            </button>
        </div>
        </>
    );
}


export default ButtonSosmed;
