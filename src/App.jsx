import ParentComponent from "./Components/ParentComponent";

export default function App() {
  return (
    <div className="bg-[#a3b18a] min-h-screen p-4">
      <h1 className="flex justify-center text-5xl capitalize font-bold text-gray-800 mb-10">
        Callback hook
      </h1>
      <div className="max-w-md mx-auto">
        <ParentComponent />
      </div>
    </div>
  );
}
