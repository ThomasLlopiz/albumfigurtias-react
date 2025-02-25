
export const Banner = () => {
  return (
    <section className="mt-40 relative md:mt-80">
      <div className="flex gap-20 justify-center items-center">
        <div className="w-2/5 text-white hidden md:block">
          <img src="./imagenes/general/album.png" alt="Album Cover" />
        </div>
        <div className="w-2/5 text-white hidden md:block">
          <img src="./imagenes/general/heroimage.png" alt="Hero Image" />
        </div>
        <div className="w-5/6 text-white block md:hidden">
          <img src="./imagenes/general/albummobile.png" alt="Album Mobile" />
        </div>
      </div>
    </section>
  );
};
