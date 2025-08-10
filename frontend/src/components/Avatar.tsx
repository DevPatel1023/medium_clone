import type { AvatarProps } from "../types/AvatarProps";

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

//predefined colors fun to generate the colors 
const getColorFromName = (name: string) => {
  const colors = [
  'bg-blue-600 text-white',
  'bg-green-600 text-white',
  'bg-red-500 text-white',
  'bg-yellow-400 text-black',
  'bg-purple-600 text-white',
  'bg-pink-500 text-white',
  'bg-teal-500 text-white',
  'bg-orange-400 text-black',
  'bg-indigo-600 text-white',
  'bg-cyan-500 text-white',
];

  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; 
  }
  
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};


const Avatar = ({ name } : AvatarProps ) => {
  const initials = getInitials(name).toUpperCase();
  const colorClass : string =  getColorFromName(name);
  return (
    <div className={`w-8 h-8 rounded-full ${colorClass} flex items-center justify-center  text-sm font-semibold`}>
      {initials}
    </div>
  );
};

export default Avatar;
