import Dock from "./ReactBits/Dock"
import { useNavigate } from "react-router-dom";
import {House, Brush, Earth, Slice, Settings, SquareDashed} from 'lucide-react';

export default function NavDock() {
    const navigate = useNavigate();
    const items = [
        { icon: <House color='#F0FFFF' size={18} />, label: 'Home', onClick: () => navigate("/") },
        { icon: <Brush color='#F0FFFF' size={18} />, label: 'Draw Climber', onClick: () => navigate("/Draw-Climber") },
        { icon: <Earth color='#F0FFFF' size={18} />, label: 'State.io', onClick: () => navigate("/State.io") },
        { icon: <Slice color='#F0FFFF' size={18} />, label: 'Slice it all', onClick: () => navigate("/slice-it-all") },
        { icon: <SquareDashed color='#F0FFFF' size={18} />, label: 'Tomb of the mask', onClick: () => navigate("/tomb-of-the-mask") },
        { icon: <Settings color='#F0FFFF' size={18} />, label: 'Advanced', onClick: () => navigate("/advanced") },
    ];
    return(
    <div>
      <Dock items={items} className='z-3'></Dock>
    </div>
    )
}