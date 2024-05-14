import { Link } from "react-router-dom";
import { logout } from "../services/loginService";
import { useAuth } from "../context/authContext";

function Button({ children, className }) {
  return (
    <button
      className={`justify-center items-center px-3.5 py-2 w-full rounded-lg border border-solid shadow-sm ${className}`}
    >
      {children}
    </button>
  );
}

function GoogleSignInButton() {
  return (
    <button className="flex  justify-center px-4 py-2.5 mt-6 text-base leading-6 bg-white rounded-lg border border-blue-400 border-solid shadow-sm text-slate-700">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/164d58cdc72bb1777d56826375ab206ad40eabe72ff8d01872511dc35952e729?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
        alt="Google logo"
        className="shrink-0 w-6 aspect-square mr-1"
      />
      <span>Sign in with Google</span>
    </button>
  );
}
const UserOrLogin = () => {
  const { user, setUser, setClient, setExpert } = useAuth();

  const logoutAndClearUser = () => {
    setUser(null);
    setClient(null);
    setExpert(null);
    logout()
      .then(() => {
        alert("登出成功！");
        location.href = "/";
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="flex flex-col text-sm font-semibold leading-5 w-[200px] self-center my-3">
      <article
        className="flex gap-0 mt-3 items-center"
        style={{ width: "100%" }}
      >
        <div className="flex flex-col justify-center items-start self-start pr-4">
          <img
            className="rounded-full"
            style={{ width: "40px", aspectRatio: "1/1" }}
          ></img>
        </div>
        <div className="flex flex-col">name</div>
      </article>
      <Link to={"/"}></Link>
      {user ? (
        <div onClick={logoutAndClearUser}>
          <Button className="mt-7 text-white whitespace-nowrap bg-blue-400 border-sky-500 hover:bg-blue-500 hover:border-sky-600">
            Logout
          </Button>
        </div>
      ) : (
        <Link to={"/login"}>
          <Button className="text-white whitespace-nowrap bg-blue-400 border-sky-500 hover:bg-blue-500 hover:border-sky-600">
            Login
          </Button>
        </Link>
      )}
      <Link to={"/register"}>
        <Button className="mt-7 text-blue-400 bg-white border-blue-400 hover:bg-blue-100 hover:border-blue-500">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default UserOrLogin;
