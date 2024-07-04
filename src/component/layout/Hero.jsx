import profile from '../../assets/image/aqua.jpeg';
import TextHero from '../Element/Hero';
import ButtonSosmed from '../Element/Hero/btn-sosmed';

const Hero = () => {
    return (
        <section className="mt-12 pb-4 flex flex-col md:flex-row md:h-screen items-center bg-second-bg-color" id='Home'>
            <div className="w-full md:w-1/2 p-2 flex flex-col justify-center max-h-screen">
                <TextHero />
                <ButtonSosmed />
            </div>
            <div className="w-full md:w-1/2 py-14 flex justify-center max-h-screen mb-5">
                <img src={profile} alt="Profile" className="h-72 w-72 md:h-80 md:w-80 lg:h-[30rem] lg:w-[30rem] object-cover" />
            </div>
        </section>
    );
};

export default Hero;
