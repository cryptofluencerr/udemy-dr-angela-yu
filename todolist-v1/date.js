exports.getDate = () => {
  const today = new Date();

  return today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

exports.getDay = () => {
  const today = new Date();

  var day = today.toLocaleDateString("en-US", {
    weekday: "long",
  });
  return day;
};
