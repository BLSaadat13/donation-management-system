import { Formik } from "formik";
import { ngos } from "../data/ngos";
import useFirebase from "../Firebase/useFirebase";
import { useNavigate } from "react-router-dom";
import bg from "./../assets/banner-2.jpg";

const DonationForm = () => {
    const { postDonationData } = useFirebase();
    const navigate = useNavigate();
    return (
        <div
            className="bg-fixed bg-center bg-no-repeat bg-cover h-screen w-screen"
            style={{
                backgroundImage: "url(" + bg + ")",
            }}
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-lg bg-black bg-opacity-70 p-8 rounded-md">
                    <h2 className="text-2xl md:text-3xl font-cursive text-green-400 underline mb-6">
                        Please fill out the following fields to get in touch
                        with us and donate!
                    </h2>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            dateOfBirth: "",
                            phone: "",
                            address: "",
                            state: "",
                            zip: "",
                            ngo: ngos[0].name,
                            foodType: "",
                            approved: false,
                        }}
                        validate={(_values) => {
                            const errors = {};

                            // if (!values.email) {
                            //     errors.email = "Required";
                            // } else if (
                            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            //         values.email
                            //     )
                            // ) {
                            //     errors.email = "Invalid email address";
                            // }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                postDonationData(values);
                                navigate("/");
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                {/* {errors.email && touched.email && errors.email} */}

                                <div className="w-full max-w-lg mx-auto">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full  px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-first-name"
                                            >
                                                Name
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                placeholder="Jane"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full  px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-first-email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-email"
                                                type="email"
                                                placeholder="hello@gmail.com"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full  px-3">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-last-name"
                                                required
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-last-name"
                                                type="phone"
                                                name="phone"
                                                placeholder="01719191919"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-city"
                                            >
                                                Date of Birth
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-city"
                                                type="date"
                                                name="dateOfBirth"
                                                placeholder="Albuquerque"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.dateOfBirth}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-first-name"
                                            >
                                                Address
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                name="address"
                                                placeholder="Your Address"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                            />
                                            {/* <p className="text-red-500 text-xs italic">
                                                Please fill out this field.
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-2">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-state"
                                            >
                                                State
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                    name="state"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.state}
                                                    required
                                                >
                                                    <option>
                                                        Kuala Lumpur
                                                    </option>
                                                    <option>Selangor</option>
                                                    <option>Kuantan</option>
                                                    <option>Johor</option>
                                                    <option>Penang</option>
                                                    <option>Perak</option>
                                                    <option>Perlis</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg
                                                        className="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-zip"
                                            >
                                                Zip
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-zip"
                                                type="text"
                                                placeholder="90210"
                                                name="zip"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.zip}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-state"
                                            >
                                                Choose NGO
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                    name="ngo"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.ngo}
                                                    required
                                                >
                                                    {ngos?.map((ngo) => {
                                                        return (
                                                            <option>
                                                                {ngo?.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg
                                                        className="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                                htmlFor="grid-state"
                                            >
                                                Choose Food Type
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                    name="foodType"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.foodType}
                                                >
                                                    <option>
                                                        {" "}
                                                        Fresh Produce
                                                    </option>
                                                    <option>
                                                        Extra Groceries (Fruits
                                                        and Vegetables)
                                                    </option>
                                                    <option>
                                                        Well Cooked Food
                                                    </option>
                                                    <option>
                                                        Raw/Frozen Food
                                                    </option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg
                                                        className="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                            <button
                                                type="submit"
                                                style={{
                                                    background:
                                                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                }}
                                                className="md:w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default DonationForm;
