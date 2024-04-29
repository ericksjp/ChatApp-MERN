/* eslint-disable react/prop-types */
export default function Header({ fullName }) {
  return (
    <div className="bg-slate-500 px-4 py-2">
      <span className="label-text mr-2">To: </span>
      <span className="font-bold">{fullName}</span>
    </div>
  );
}
