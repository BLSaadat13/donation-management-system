import { getDatabase, ref, child, push, update } from "firebase/database";

const DonationCard = (props) => {
    const handleApprove = () => {
        const db = getDatabase();

        const updates = {};
        updates["/donations/" + props.id] = { ...props, approved: true };

        return update(ref(db), updates);
    };

    return (
        <div className="w-2/5 my-8 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.ngo}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Name: {props?.name}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Phone: {props?.phone}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Address: {props?.address}
            </p>
            {!props?.approved ? (
                <button
                    onClick={handleApprove}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Approve
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            ) : (
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-700 bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-green-300 ">
                    Approved{"  "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-elbow-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M21 14v-6h-6"></path>
                        <path d="M21 8l-9 9l-9 -9"></path>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default DonationCard;
