import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import Logged from "../../components/sidebar/Logged";

export default function Home() {
  return (
    <div className="m-auto">
      <Logged style={"m-2"} />
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}
