import { useState, useEffect } from 'react';

export const Popup = () => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="relative bg-white p-1 rounded-lg shadow-lg w-full lg:w-1/4 h-auto">
                        <button
                            onClick={handleClose}
                            className="absolute top-1 right-3 text-xl font-bold text-white bg-transparent border-none cursor-pointer"
                        >
                            X
                        </button>
                        <img
                            src="./imagenes/club/popup.jpg"
                            alt="popup"
                            className="w-full h-auto mx-auto"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
