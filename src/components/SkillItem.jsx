const SkillItem = ({ skillInfo }) => {
  const { name, imageUrl } = skillInfo;
  return (
    <li className="flex flex-col items-center">
      <img src={imageUrl} alt={name} className="h-10 w-10"/>
      <span className="text-gray-700 text-sm block mt-4">{name}</span>
    </li>
  );
};

export default SkillItem;
