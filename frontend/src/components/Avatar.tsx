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

const Avatar = ({ name } : {name : string}) => {
  const initials = getInitials(name).toUpperCase();
  return (
    <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-sm font-semibold">
      {initials}
    </div>
  );
};

export default Avatar;
