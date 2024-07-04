import linkIcon from '../../assets/svg/link-icon.svg';
import { PROJECTS } from '../../constant';

const Portfolio = () => {
    return (
        <section className="text-white h-auto flex flex-col items-center justify-center py-24 md:py-12 bg-bg-color" id='Portfolio'>
            <h1 className="text-4xl font-semibold font-poppins text-center mb-4">
                Latest <span className="text-main-color">Projects</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 h-full">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="relative w-full h-48 md:h-56 lg:h-60 overflow-hidden group">
                        <img
                            src={project.image}
                            alt={`Project ${index + 1}`}
                            className="w-full h-full rounded-lg mb-4 transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <h4 className="text-lg font-bold text-white m-2">
                                {project.title}
                            </h4>
                            <p className="text-sm text-white text-center mb-4">
                                {project.description}
                            </p>
                            <div className="flex text-main-color justify-center items-center border hover:bg-main-color hover:text-white border-main-color rounded-lg p-4">
                                <img src={linkIcon} alt="Link Icon" className="h-6 w-6 mr-2" />
                                <a href={project.link} className="text-sm" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
