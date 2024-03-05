import Swal from "sweetalert2";

export const mwToKW = (mw) => {
  return (mw / 1000).toFixed(3);
};
export const average = (numbers) => {
  const sum = numbers.reduce((total, item) => total + Number(item.price), 0);
  const count = numbers.reduce(
    (total, item) => (item ? (total += 1) : null),
    0
  );
  return (sum / count).toFixed(3);
};
export const expensive = (numbers) => {
  const mostExpensive = numbers.reduce(
    (max, item) => (item.price > max.price ? item : max),
    { price: 0 }
  );
  return mostExpensive.date.getHours();
};
export const cheap = (numbers) => {
  const cheapest = numbers.reduce(
    (min, item) => (item.price < min.price ? item : min),
    { price: Infinity }
  );
  return cheapest.date.getHours();
};
export const cheapestHours = (numbers) => {
  const numbers_ = Array.from(numbers.map((element) => Object.values(element)));
  let startingCheapestHour = 0;
  let lastAmount = 0;
  for (let i = 0; i <= numbers_.length - 3; i++) {
    if (
      Number(numbers_[i].price) +
        Number(numbers_[i + 1].price) +
        Number(numbers_[i + 2].price) <
      lastAmount
    ) {
      lastAmount =
        Number(numbers_[i].price) +
        Number(numbers_[i + 1].price) +
        Number(numbers_[i + 2].price);
      startingCheapestHour = new Date(numbers_[i].date.getHours());
    }
  }
  return startingCheapestHour;
};
export const manageAlert = (array, element_, function_) => {
  const sound = new Audio("./pop.mp3");
  if (
    array.findIndex(
      (element) =>
        element.date === element_.date && element.price === element_.price
    ) !== -1
  ) {
    function_([
      ...array.filter(
        (element) =>
          element.date !== element_.date && element.price !== element_.price
      ),
    ]);
    Swal.fire({
      title: "Warning!",
      text: "The alert has been successfully removed",
      icon: "warning",
      timer: 2000,
      showConfirmButton: false,
    });
    sound.play();
  } else {
    const hour = new Date(element_.date).getHours();
    const currentHour = new Date().getHours();
    if (hour <= currentHour) {
      Swal.fire({
        title: "Attention!",
        text: "Cannot schedule an alert for a time that has already passed",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Accept",
      });
    } else {
      function_([...array, element_]);
      Swal.fire({
        title: "Success!",
        text: "The alert has been set successfully",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      sound.play();
    }
  }
};
export const indicator = (price) => {
  if (price < 0.06) return "🟢";
  if (price > 0.06 && price <= 0.08) return "🟠";
  if (price > 0.08) return "🔴";
};
export const formatHour = (hour) => {
  if (Number(hour) < 10) return `0${hour}`;
  else return hour;
};
export const programAlerts = (alerts, handlerAlerts) => {
  let alerts_ = [];
  alerts.forEach((alert) => {
    const alertDate = new Date(alert.date);
    const price = alert.price;

    const sleep = alertDate.getTime() - Date.now();

    const timeoutID = setTimeout(() => {
      Swal.fire({
        title: "Rrrriiiiing!",
        text: `It's time to spend electricity!⚡ Only ${price}€ Kw/h!`,
        icon: "info",
        confirmButtonText: "Accept",
      });
      const sound = new Audio("./Ring.mp3");
      sound.play();
    }, sleep);
    alerts_ = [...alerts_, timeoutID];
  });
  handlerAlerts(alerts_);
};
export const earlierThanNow = (date) => {
  return date.getHours() <= new Date().getHours();
};
export const equalsToNow = (date) => {
  return date.getHours() === new Date().getHours();
};
export const todayDate = () => {
  const date = new Date();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
