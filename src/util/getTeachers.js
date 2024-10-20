import axios from "axios";

export default async () => {
  try {
    const { data } = await axios(
      `${process.env.REACT_APP_BACK_END}/api/teachers`,
      {
        withCredentials: true,
      }
    );
    if (data) {
      const d = data.Teachers.reduce((teacherArray, current) => {
        return teacherArray.concat({
          _id: current._id,
          first_name: current.User.First_name,
          last_name: current.User.Last_name,
          email: current.User.Email,
          tests: current.Available_tests,
        });
      }, []);
      return d;
    }
  } catch (err) {
    return err;
  }
};
