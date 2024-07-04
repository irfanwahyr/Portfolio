import { HERO_CONTENT } from '../../../constant/index';
import ReactTypingEffect from 'react-typing-effect';

const TextHero = () => {
    return (
        <div className="text-white my-10 md:px-5 lg:px-10">
            <h4 className="text-2xl md:text-3xl lg:text-5xl pb-1 md:pb-2 lg:pb-5 font-semibold font-poppins">Hello, It`s Me</h4>
            <h2 className="text-3xl md:text-4xl lg-text-6xl pb-1 md:pb-2 lg:pb-5 font-semibold leading-[1.3] font-poppins">Irfan Wahyu Ramadhani</h2>
            <h4 className="text-xl md:text-2xl lg:text-3xl pb-2 lg:pb-2 font-semibold font-poppins">
                And I`m a <span className="font-poppins text-main-color">
                <ReactTypingEffect
                    text={["FullStack Developer", "Data Scientist"]}
                    speed={200}
                    eraseSpeed={100}
                    eraseDelay={2000}
                    typingDelay={300}
                    />
                    </span>
            </h4>
            <p className="text-sm md:text-base lg:text-xl font-semibold font-poppins">
                {HERO_CONTENT}
            </p>
        </div>
    )
}

export default TextHero;
