import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/appSlice/AppSlice";

export default function Header({ className, style}) {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };


  return (
    <header className={`${className}  border `} style={style}>
        <button onClick={handleToggle}>{sidebarOpen ? 'close' : 'opne'  }</button>
    </header>
  );
}
