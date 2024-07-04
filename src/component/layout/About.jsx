import SkillAbout from '../Element/About/SkillAbout';
import TextAbout from '../Element/About/TextAbout';

const About = () => {
    return (
        <section className='p-5 items-center bg-bg-color' id='About'>
            <div className="mt-5 bg-bg-color">
                <h4 className="text-2xl md:text-3xl pt-5 text-white font-semibold font-poppins mb-4 text-center">
                    About <span className="font-poppins text-main-color">Me!</span>
                </h4>
                <TextAbout />
            </div>
            <div className="mt-5 bg-bg-color">
                <h4 className="text-2xl md:text-3xl text-white font-semibold font-poppins mb-4 text-center">
                    SkillSet<span className="font-poppins text-main-color"> FullStack!</span>
                </h4>
                <SkillAbout text={"fullstack"}/>
                <h4 className="text-2xl md:text-3xl text-white font-semibold font-poppins my-4 text-center">
                    SkillSet<span className="font-poppins text-main-color"> Data Science!</span>
                </h4>
                <SkillAbout text={"datascience"}/>
            </div>
        </section>
    )
}

export default About;

// { title: "Python", imgUrl: "https://example.com/python.png" },
        // { title: "Pandas", imgUrl: "https://example.com/pandas.png" },
        // { title: "NumPy", imgUrl: "https://example.com/numpy.png" },
        // { title: "Scikit-Learn", imgUrl: "https://example.com/scikit-learn.png" },
        // { title: "TensorFlow", imgUrl: "https://example.com/tensorflow.png" }