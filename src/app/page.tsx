'use client'
import About from "./Components/About";
import ArtSection from "./Components/ArtSection";
import Cocktails from "./Components/Cocktails";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { useRef } from "react";

export default function Home() {

    const homeRef = useRef<HTMLDivElement>(null);
    const cocktailsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const artRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    const refArr = [homeRef, cocktailsRef, aboutRef, artRef, footerRef];


    return (
        <main className="bg-black/70" ref={homeRef}>
            <Navbar refArr={refArr} />
            <Hero />
            <Cocktails ref={cocktailsRef} />
            <About ref={aboutRef} />
            <ArtSection ref={artRef} />
            <Menu />
            <Footer ref={footerRef} />
        </main>
    );
}
