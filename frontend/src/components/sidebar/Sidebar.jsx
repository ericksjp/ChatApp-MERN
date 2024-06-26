import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import Modal from "./Modal";

export default function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col gap-y-5">
      <Modal />
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
}
