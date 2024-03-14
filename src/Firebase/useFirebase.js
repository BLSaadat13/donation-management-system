import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "./firebase.init";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push, child, get } from "firebase/database";

const app = initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [firebaseError, setFirebaseError] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const navigate = useNavigate();

    // register new user with email and password
    const register = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setFirebaseError(null);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            })
            .finally(() => setLoading(false));
    };

    // login with email and password
    const login = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setFirebaseError(null);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            })
            .finally(() => setLoading(false));
    };

    //Logout user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(undefined);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
            }
            setLoading(false);
        });
    }, []);
    const db = getDatabase(app);
    const donationList = ref(db, "donations");
    const postDonationData = (data) => {
        push(donationList, data);
    };

    const getDonationData = () => {
        get(child(db, `donations/NUX2HpJQh8fDLoYOvui`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.log("error");
                console.error(error);
            });
    };

    return {
        loading,
        user,
        firebaseError,
        register,
        login,
        logOut,
        postDonationData,
        getDonationData,
    };
};

export default useFirebase;
