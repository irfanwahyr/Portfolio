import { ABOUT_TEXT } from '../../../constant/index';

const TextAbout = () => {
    return (
        <div className="bg-transparent border border-main-color rounded-lg p-2 mb-10 mx-auto sm:w-3/4 md:w-3/4 lg:w-1/2">
            <p className="text-white text-base text-justify font-poppins">
                {ABOUT_TEXT}
            </p>
        </div>
    );
};

export default TextAbout;
