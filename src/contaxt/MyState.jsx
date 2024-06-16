import Mycontaxt from "./Mycontaxt";

function MyState({ children }) {
  const name = "Aadit Baldaniya";
  return <Mycontaxt.Provider value={name}>{children}</Mycontaxt.Provider>;
}

export default MyState;
