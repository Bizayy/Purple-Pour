'use client'
<<<<<<< HEAD
=======
import About from "./Components/About";
>>>>>>> master
import Cocktails from "./Components/Cocktails";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
    return (
<<<<<<< HEAD
        <main>
            {/*
            */}
            <Navbar />
            <Hero />
            <Cocktails />
=======
        <main className="bg-black/70">
            <Navbar />
            <Hero />
            <Cocktails />
            {/*
            */}
            <About />
>>>>>>> master
        </main>
    );
}
