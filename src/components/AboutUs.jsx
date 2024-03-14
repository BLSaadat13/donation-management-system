import aboutUsBG from './../assets/aboutUsBG.jpg';
import { useNavigate } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";


const AboutUs = () => {
    
    const { user } = useFirebase();
    const navigate = useNavigate();
    
    const handleDonationClick = () => {
        if (user?.email) {
            navigate("/donation");
        } else {
            navigate("/login");
        }
    };
    
    return (
        <section className="gradient-form h-screen dark:bg-neutral-700"
            style={{
                backgroundImage: `url(${aboutUsBG})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container mx-auto h-full">
                <div className="h-1/4 flex items-center justify-center">
                    <h1 className="text-5xl font-extrabold bg-black bg-opacity-50 text-red-600 p-4 rounded">
                        About us
                    </h1>
                </div>
                <div className="h-3/4 bg-black bg-opacity-80 p-8 rounded-xl mx-11">
                    <p className="text-xl text-white">
                        Established in 2023, our food donation management system was created with a mission to make a tangible difference in the lives of the homeless and underprivileged. 
                        We believe that everyone deserves access to nutritious food, and by providing a seamless platform to facilitate food donations, we aim to bridge the gap between excess food 
                        and those who need it most.
                        <br/>
                        <br/>
                        <br/>
                        Our innovative system simplifies the process of donating food, making it easier than ever for individuals and organizations to contribute to this worthy cause. 
                        By connecting donors with local food banks, shelters, and community programs, we ensure that surplus food is utilized efficiently, 
                        reducing food waste and helping the environment by lowering our collective carbon footprint.
                        <br/>
                        <br/>
                        <br/>
                        We are driven by our commitment to alleviating hunger, promoting sustainability, and fostering a sense of community.
                        By joining our efforts, you can help create a world where no one goes hungry, and every meal finds a home. 
                        Together, we can make a lasting impact on the lives of those in need and build a brighter future for all.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <div className="mx-auto">
                        <button
                            onClick={handleDonationClick}
                            className="w-35 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                        >
                            Donate For The Cause
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;