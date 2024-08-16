import { useSelector } from "react-redux";

function NoPage() {
  const aadi = useSelector((store) => {
    return store.aadi;
  });
  console.log("aadi", aadi);

  return (
    <div>
      <h1 className="text-center">Error</h1>
      <p>Typing Error</p>
    </div>
  );
}

export default NoPage;
