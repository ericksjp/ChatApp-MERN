import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

export default function Home() {
  return (
    <div className="flex m-auto sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-slate-500">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
