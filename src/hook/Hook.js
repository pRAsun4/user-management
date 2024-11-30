export const truncate = (text, length) => {
  if (!text) return ""; 
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const AvatarFunc = (name) => {
  if (!name) return "";

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("+");

  return `https://eu.ui-avatars.com/api/?name=${initials}&size=250`;
};
