
import { Link } from "react-router-dom"
export const BannerInscribite = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 my-10 rounded-md">
            <Link to="inscribirme">
                <img src="./imagenes/club/publicidad1.jpg" alt="Publicidad" className="w-full h-auto rounded-lg hidden xl:block" />
                <img src="./imagenes/club/publicidad1mobile.jpg" alt="Publicidad" className="w-full h-auto rounded-lg block xl:hidden" />
            </Link>
        </div>
    )
}

