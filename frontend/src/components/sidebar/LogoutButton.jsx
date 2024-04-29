import { BiLogOut } from "react-icons/bi";
export default function LogoutButton() {
  return (
    <div className="mt-0">
      <BiLogOut
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="w-6 h-6 text-white cursor-pointer rounded-full hover:bg-sky-600"
      />
    </div>
  );
}
