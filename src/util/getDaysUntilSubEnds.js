import dayjs from "dayjs";
export default () => {
  const subscriptionEndDate = "2021-09-21";
  const now = dayjs(Date.now()).format("YYYY-MM-DD");
  const exp = dayjs(subscriptionEndDate).format("YYYY-MM-DD");
  return dayjs(exp).diff(now, "day");
};
