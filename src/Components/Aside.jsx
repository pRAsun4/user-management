import Navbar from "./Navbar";

export default function Aside({ className, isSmallScreen }) {
  return (
    <aside
      className={`fixed top-0 left-0  px-3 py-8 headbar  min-h-screen ${className} border`}
    >
      <Navbar isSmallScreen={isSmallScreen} />
    </aside>
  );
}
