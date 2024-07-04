import { Link } from "../../../constant";

const ButtonSosmed = () => {

    const openPdfFile = () => {
        const pdfFilePath = '/src/assets/file/ATS-CV-IRFAN-Complete.pdf';
        window.open(`file://${pdfFilePath}`, '_blank');
    };

    return (
        <div className="flex justify-center pt-10">
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
            <button
                onClick={openPdfFile}
                className="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18
                    bg-transparent border-[0.1rem] border-main-color rounded-full
                    mx-6 mb-4 transition duration-500 ease-in-out hover:bg-main-color
                    hover:shadow-main-color"
            >
                <i className="bx bx-file text-main-color text-2xl md:text-3xl lg:text-4xl hover:text-white transition duration-500 ease-in-out" />
            </button>
        </div>
    );
}


export default ButtonSosmed;
