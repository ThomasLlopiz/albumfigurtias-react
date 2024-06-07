export const Footer = ( ) => {
    return (
        <footer class="text-white pt-16 pb-8">
            <div class="container mx-auto">
                <div class="flex flex-col md:flex-row justify-center items-center">

                    <div class="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center ">
                        <p class="text-lg mt-1 text-center md:text-left">SOCIEDAD SPORTIVA DEVOTO</p>
                        <a href="https://drive.google.com/file/d/1DvCUonGu-QEZvXqvNdLM4pdNODlU3zM2/view" class="text-lg hover:text-green-500 transition-transform duration-300 text-center md:text-left">NUESTRO REGLAMENTO</a>
                        <a href="" class="text-lg hover:text-green-500 transition-transform duration-300 text-center md:text-left">PREDIO SSD</a>
                    </div>

                    <div class="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                        <a href="#"><img src="./ssdescudocolor.png" alt="Logo" class="w-32 h-32 hover:scale-110 transition-transform duration-300"/></a>
                    </div>

                    <div class="w-full md:w-1/3 flex flex-col items-center">
                        <div class="flex space-x-6 my-8">
                            <a href="https://facebook.com" target="_blank" class="text-center border border-green-500 hover:text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300">
                                <i class="fab fa-facebook-square text-white text-3xl hover:text-green-500"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" class="text-center border border-green-500 hover:text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300">
                                <i class="fab fa-instagram text-white text-3xl hover:text-green-500"></i>
                            </a>
                            <a href="https://website.com" target="_blank" class="text-center border border-green-500 hover:text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300">
                                <i class="fas fa-globe text-white text-3xl hover:text-green-500"></i>
                            </a>
                        </div>
                        <div class="text-sm text-white mb-2 flex flex-col items-center">
                            <a href="" class="text-lg hover:text-green-500">ALBUM LLENO</a>
                            <a href="" class="text-lg hover:text-green-500">PREMIOS</a>
                            <a href="" class="text-lg hover:text-green-500">CONTACTO</a>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-20">
                    <p class="text-xs">&copy; 2024 SOCIEDAD SPORTIVA DEVOTO. TODOS LOS DERECHOS RESERVADOS.</p>
                    <p class="text-xs mt-1">VISITA EL <a href="https://grupodevoto.com.ar" class="hover:text-green-500">GRUPO COOPERATIVO DEVOTO</a></p>
                </div>
            </div>
        </footer>
    )
}
