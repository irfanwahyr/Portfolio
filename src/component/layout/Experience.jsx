import { useState } from 'react';
import { EXPERIENCE } from '../../constant';

const Experience = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(EXPERIENCE.length / itemsPerPage);

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const toggleDescription = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };

    const currentExperiences = EXPERIENCE.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <section className="bg-second-bg-color text-white py-5 md:pt-5 h-screen" id="Experience">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-center py-8">
                Work
                <span className="text-main-color text-3xl md:text-4xl font-poppins"> Experience!</span>
            </h2>

            <div className="relative container mx-auto px-6">
                <div className="absolute border-l-4 border-main-color h-full top-0 left-1/2 transform -translate-x-1/2"></div>

                {currentExperiences.map((exp, index) => (
                    <div
                        className={`mb-2 flex justify-between items-center cursor-pointer w-full ${exp.side === 'left' ? 'left-timeline' : 'right-timeline'}`}
                        key={index}
                        onClick={() => toggleDescription(index)}
                    >
                        {exp.side === 'left' ? (
                            <>
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-2 text-left">
                                    <div className="relative mb-2">
                                        <div className="absolute bg-main-color rounded-full w-4 h-4 left-[-1.5rem] top-1/2 transform -translate-y-1/2"></div>
                                        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">{exp.year}</h3>
                                    </div>
                                    <div
                                        className={`inline-block bg-bg-color rounded-md p-4 shadow-lg border border-main-color ${
                                            expandedIndex === index ? 'h-auto' : 'h-16 overflow-hidden'
                                        }`}
                                    >
                                        <h3 className="text-sm md:text-lg font-semibold leading-snug tracking-wide text-white">{exp.title}</h3>
                                        <p className={`text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 ${expandedIndex !== index && 'hidden'}`}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <div className="relative mb-2">
                                        <div className="absolute bg-main-color rounded-full w-4 h-4 right-[-1.5rem] top-1/2 transform -translate-y-1/2"></div>
                                        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">{exp.year}</h3>
                                    </div>
                                    <div
                                        className={`inline-block bg-bg-color rounded-md p-4 shadow-lg border border-main-color ${
                                            expandedIndex === index ? 'h-auto' : 'h-16 overflow-hidden'
                                        }`}
                                    >
                                        <h3 className="text-sm md:text-lg font-semibold leading-snug tracking-wide text-white">{exp.title}</h3>
                                        <p className={`text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 ${expandedIndex !== index && 'hidden'}`}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="order-1 w-5/12"></div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4 py-10">
                <button
                    onClick={handlePreviousPage}
                    className="px-4 py-2 mx-2 bg-transparent border border-main-color text-white rounded hover:bg-main-color disabled:opacity-50"
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    className="px-4 py-2 mx-2 bg-transparent border border-main-color text-white rounded hover:bg-main-color disabled:opacity-50"
                    disabled={currentPage === totalPages - 1}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Experience;
