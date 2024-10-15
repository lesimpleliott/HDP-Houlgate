type FacilityCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FacilityCard = ({ title, description, icon }: FacilityCardProps) => {
  return (
    <article className="card flex min-w-36 items-center gap-4 p-4 leading-4">
      <img src={icon} alt="" className="w-12 md:w-16" />
      <div>
        <h3 className="text-lg font-medium text-textColor">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </article>
  );
};

export default FacilityCard;
