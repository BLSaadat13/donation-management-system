import { useState } from "react";
import Footer from "../components/Footer";
import FourthBanner from "../components/FourthBanner";
import Navigation from "../components/Navigation";
import SecondBanner from "../components/SecondBanner";
import ThirdBanner from "../components/ThirdBanner";
import TopBanner from "../components/TopBanner";
import { getDatabase, ref, onChildChanged } from "firebase/database";
import useFirebase from "../Firebase/useFirebase";
import NotificationModal from "../components/NotificationModal";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const db = getDatabase();
    const donationsRef = ref(db, "donations");

    const { user } = useFirebase();

    onChildChanged(donationsRef, (snapshot) => {
        const data = snapshot.val();
        if (data?.email) {
            const { approved, email } = data;

            if (user?.email === email && approved) {
                setShowModal(true);
            }
        }
    });
    return (
        <>
            <NotificationModal
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <Navigation />
            <TopBanner />
            <SecondBanner />
            <ThirdBanner />
            <FourthBanner />
            <Footer />
        </>
    );
};

export default Home;
