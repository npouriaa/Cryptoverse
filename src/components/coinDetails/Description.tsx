type DescriptionProps = {
    name : string
  description: string;
};

const Description = ({description , name} : DescriptionProps) => {
  return <div className="bg-[#0D0D0D] w-full p-4 rounded-xl flex flex-col gap-3">
    <h1 className="text-xl">{name}</h1>
    <p className="coin-description leading-6 text-[.9rem] text-justify" dangerouslySetInnerHTML={{
        __html : description
    }}/>
  </div>;
};

export default Description;
