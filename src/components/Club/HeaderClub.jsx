import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../../index.css";

export const HeaderClub = () => {
    return (
        <header>
            <div className="absolute w-full mx-auto inset-0 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-7xl font-semibold">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("SOCIEDAD SPORTIVA DEVOTO")
                                .pauseFor(2000)
                                .start();
                        }}
                    />
                </h1>
                <p className="text-lg md:text-2xl mt-4">
                    Forma parte del Club más grande de la zona
                </p>

                <div className="flex space-x-4 mt-6">
                <Link
                        to="inscribirme"
                        className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
                    >
                        INSCRIBIRME
                    </Link>
                    <Link
                        to={{ pathname: "/tienda" }}
                        className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
                    >
                        TIENDA VERDE
                    </Link>
                </div>
            </div>
            <img
                src="./imagenes/club/bandera.jpg"
                alt="Banner"
                className="w-full h-auto"
            />
        </header>
    );
};