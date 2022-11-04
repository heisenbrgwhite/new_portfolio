import { useEffect, useState } from "react";
import ScrollIntoView from "react-scroll-into-view"
import img from "../../assets/scroll-to-top.png";
import "./GoToTop.css";
export const GoToTop = ()=>{
    const [show,setShow] = useState(false);
    useEffect(()=>{
        const toggleShow = () => {
            if(window.scrollY>100){
                setShow(true);
                console.log(show);
            }
            else setShow(false);
        }
        window.addEventListener("scroll", toggleShow);
    return ()=>{ window.removeEventListener("scroll",toggleShow);}
    })
    return (<>
    <ScrollIntoView selector="#home" className={`scroll-to-top ${show ? "show": ""}`}>
        <img src={img} alt="Scroll to Top"/>
    </ScrollIntoView>
    </>);
}