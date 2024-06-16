type LiProps = { title: string };

export const Li = ({ title }: LiProps) => {
  return (
    <li className="flex mb-2.5">
      <div className="w-[10px] min-w-[10px] mt-2 h-[10px] bg-purple-lighter mr-2 rounded-[2px] rotate-45" />
      {title}
    </li>
  );
};
