const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 0 || !parts[0]) {
    return 'NA';
  }

  const first = parts[0][0];

  if (parts.length === 1) {
    return first.toLowerCase();
  }

  const last = parts[parts.length - 1][0];
  return (first + last).toLowerCase();
};

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-white">
      <span className="text-xs font-semibold leading-none">
        {getInitials(name)}
      </span>
    </div>
  );
};

export default Avatar;
