import Grainient from "./ReactBits/Grainient"

export default function Background() {
    return(
    <div style={{ position:"absolute", top:0, left:0, zIndex: 1, width:"100%", height:"100%"}}>
        <Grainient color1='#3d3846' color2='#3f3d3d' color3='#241f31'/>
    </div>)
}