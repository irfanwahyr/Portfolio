import { EMAIL } from "../../constant";

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const whatsapp = formData.get('whatsapp');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const recipientEmail = EMAIL.email;

        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${
            encodeURIComponent(`Name: ${name}\nEmail: ${email}\nWhatsapp: ${whatsapp}\n\n${message}`)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <section className="bg-second-bg-color text-white flex justify-center items-center h-screen" id="Contact">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact <span className="text-main-color">Me!</span></h2>
                <div className="max-w-lg mx-auto bg-bg-color p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name..." className="w-full px-4 py-2 bg-second-bg-color rounded-md focus:outline-none focus:border-main-color" />
                            <input type="email" placeholder="Email..." className="w-full px-4 py-2  bg-second-bg-color rounded-md focus:outline-none focus:border-main-color" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Whatsapp Number..." className="w-full px-4 py-2 bg-second-bg-color rounded-md focus:outline-none focus:border-main-color" />
                            <input type="text" placeholder="Email Subject..." className="w-full px-4 py-2 bg-second-bg-color rounded-md focus:outline-none focus:border-main-color" />
                        </div>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Your Message..." className="w-full px-4 bg-second-bg-color rounded-md focus:outline-none focus:border-main-color"></textarea>
                        <button type="submit" className="w-full bg-main-color text-white py-2 px-4 rounded-md hover:bg-bg-color border-main-color hover:border hover:border-main-color transition duration-300">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
