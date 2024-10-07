const LoaderSpinner = () => {
  return (
    <div className="w-full h-[86.5vh] flex justify-center items-center">
      <div className="loader h-12 w-12 rounded-full relative before:box-border before:absolute before:inset-0 before:rounded-full before:border-4 before:border-[#ff9332] "></div>
    </div>
  );
};

export default LoaderSpinner;
