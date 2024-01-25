export const formatDate = (date?: string) => {
  const dateObject: Date = new Date(date || Date.now());
  const formattedDate: string = dateObject.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
};
