import Link from "next/link"
import Image from "next/image"
import { navItems } from "../Constants"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {

    useGSAP(() => {
        // making a gsap timeline:
        // const navTween = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.navDiv',
        //         start: 'bottom top', // starts when the nav element's bottom reaches the top of the viewport, is what this line means.
        //     }
        // });
        // navTween.fromTo('.navDiv', {
        gsap.fromTo('.navDiv', {
            backgroundColor: 'transparent',
        }, {
            backgroundImage: 'none',
            backgroundColor: '#00000050', //30% in hexadecimal
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: document.body,
                start: 'top+=20 top', // starts when the nav element's top reaches the top of the viewport, is what this line means.
                toggleActions: 'play none none reverse',
            }
        });
    }, [])

    return (
        <div className="w-full p-5 navDiv bg-[url(/images/noise.png)] z-50">
            <nav className="customContainer flex-center flex-col md:flex-row gap-6 sm:gap-8 md:gap-0
                md:justify-between">
                <Link href='#home' className="flex-center gap-2 font-semibold cursor-pointer">
                    <span><Image src='/images/logo.png' alt="logo" width={32} height={32} /></span>
                    <h1 className="text-2xl [letter-spacing:1px]">Purple Pour</h1>
                </Link>
                <ul className="flex-center gap-6 sm:gap-12">
                    {
                        navItems.map((item) => (
                            <Link href={`#${item.title}`} key={item.id} className="cursor-pointer">{item.title}</Link>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

