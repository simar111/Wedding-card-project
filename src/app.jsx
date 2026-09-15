import {useEffect,useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import {Gate} from "./components/Gate";
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {Intro} from "./components/Intro";
import {Story} from "./components/Story";
import {Events} from "./components/Events";
import {Countdown} from "./components/Countdown";
import {Gallery} from "./components/Gallery";
import {Venue} from "./components/Venue";
import {Rsvp} from "./components/Rsvp";
import {Footer} from "./components/Footer";
import {FloatingPetals} from "./components/FloatingPetals";

export default function App(){
  const [opened,setOpened]=useState(false);

  useEffect(()=>{
    document.body.style.overflow=opened?"auto":"hidden";
    return()=>{document.body.style.overflow="auto"};
  },[opened]);

  return <>
    <AnimatePresence>
      {!opened && <Gate onOpen={()=>setOpened(true)}/>}
    </AnimatePresence>

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:opened?1:0}}
      transition={{duration:1.2}}
      className="site-shell"
    >
      <FloatingPetals/>
      <Navbar/>

      <main>
        <Hero/>
        <Intro/>
        <Story/>
        <Events/>
        <Countdown/>
        <Gallery/>
        <Venue/>
        <Rsvp/>
      </main>

      <Footer/>
    </motion.div>
  </>;
}