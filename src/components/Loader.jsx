const Loader = () => {
  return (
    <div className="bg-black h-screen w-full flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-30">
      <div className="spinning-loader w-[30px] md:w-[40px] h-[30px] md:h-[40px] border-[5px] border-white border-l-[#ff3030] rounded-full bg-transparent relative animate-rotate mr-3"></div>
      <div className="text-white font-bold text-xl md:text-2xl">Loading ...</div>
    </div>
  );
};

export default Loader;
