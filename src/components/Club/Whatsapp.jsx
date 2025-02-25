export const Whatsapp = () => {
  return (
    <a
      aria-label="Chatea con Nosotros"
      href="https://wa.me/3564603610?text=Hola,%20quiero%20asociarme%20a%20La%20Gran%20Promocion"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex"
    >
      <img
        loading="lazy"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.webp"
        alt="WhatsApp"
        className="w-20 h-20 rounded-full bg-green-500 hover:bg-green-600 p-2 cursor-pointer relative"
      />
      <span className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white text-center font-bold rounded-full flex items-center justify-center">
        1
      </span>
    </a>
  );
};
