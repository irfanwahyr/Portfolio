import Slider from 'react-slick';
import { SKILLS } from '../../../constant';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillAbout = (props) => {
    const { text } = props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div className="px-24">
            <Slider {...settings}>
                {SKILLS[text]?.map((skill, index) => (
                    <div
                        key={index}
                        className="
                            border border-main-color py-3 rounded-lg overflow-hidden shadow-md
                            flex flex-col items-center justify-center space-y-2 text-white
                            hover:bg-main-color
                        ">
                        <i className={`bx ${skill.icon} text-main-color hover:text-white h-8 w-full text-4xl flex items-center justify-center`}/>
                        <p className="text-center font-base text-md mt-2 w-full flex items-center justify-center">{skill.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SkillAbout;
