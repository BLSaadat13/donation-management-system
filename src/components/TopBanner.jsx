import { useNavigate } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";
import bg from "./../assets/banner-2.jpg";

const TopBanner = () => {
    const { user } = useFirebase();
    const navigate = useNavigate();

    const handleDonateClick = () => {
        if (user?.email) {
            navigate("/donation");
        } else {
            navigate("/login");
        }
    };
    return (
        <section>
            <div
                className="flex flex-col justify-center py-80"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                }}
            >
                {/* ./ means current folder. double dot(..) means 1 folder up */}
                <h1 className="text-2xl font-bold text-center py-24 text-red-500">
                    Save The Homeless
                    <br /> Save The Environment
                    <br /> Save The World
                </h1>
                <div className="mx-auto">
                    <button
                        onClick={handleDonateClick}
                        className="w-35 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    >
                        Donate For The Cause
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;
