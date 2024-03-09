const Background = () => {
  return (
    <div className="fixed z-0 top-0 w-full h-screen">
      <header className="w-full text-center py-10 ">
        <h2 className="text-zinc-500 text-xl font-semibold">Documents</h2>
      </header>
      <h1 className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter text-zinc-700 font-semibold">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
