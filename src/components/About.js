import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is the official website of FoodKhao</h2>
      <User
        name={"Wasiq Anwar (Function)"}
        location={"Gulshan E Maymar, Karachi"}
        contact={"+92 300 123 4567"}
      />
      <UserClass
        name={"Wasiq Anwar (Class)"}
        location={"Gulshan E Maymar, Karachi"}
        contact={"+92 300 123 4567"}
      />
    </div>
  );
};

export default About;
