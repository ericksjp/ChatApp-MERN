export default function Conversation() {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-600 p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg"
              alt="user picture"
            />
          </div>
        </div>
        <div className="flex w-full gap-3 justify-between">
          <p className="font-bold text-gray-200">aljhdadh</p>
          <span className="text-xl">🤖</span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
}
