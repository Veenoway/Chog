type LiProps = { title: string };

export const Li = ({ title }: LiProps) => {
  return (
    <li className="flex items-center">
      <div className="w-[10px] h-[10px] bg-purple-lighter mr-2 rounded-[2px] rotate-45" />
      {title}
    </li>
  );
};
