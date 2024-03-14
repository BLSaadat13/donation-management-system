import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import DonationCard from "../components/DonationCard";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import registerPagePic from "../assets/registerPagePic.png";

const AdminPanel = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        const db = getDatabase();
        const donationsRef = ref(db, "donations");
        onValue(donationsRef, (snapshot) => {
            const data = snapshot.val();
            const convertedData = [];
            for (const key in data) {
                convertedData.push({ ...data[key], id: key });
            }
            setDonations(convertedData);
        });
    }, []);
    return (
        <>
            <Navigation />

            <div
                className="py-10 px-12 bg-cover bg-center"
                style={{ backgroundImage: `url(${registerPagePic})` }}
            >
                <h1 className="text-4xl font-bold text-center text-red-500">
                    Admin Panel
                </h1>
                <div className="flex flex-col place-items-center bg-slate-400 bg-opacity-30">
                    {donations.map((item) => {
                        return <DonationCard key={item.id} {...item} />;
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminPanel;
