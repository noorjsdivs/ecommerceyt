const Label = ({ title }: { title: string }) => {
  return (
    <label
      htmlFor="first-name"
      className="block text-sm font-medium leading-6 text-white"
    >
      {title}
    </label>
  );
};

export default Label;
