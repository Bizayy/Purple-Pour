import Link from "next/link"
import Image from "next/image"
import { navItems } from "../Constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
const Navbar = () => {

    useGSAP(() => {
        // making a gsap timeline:
        const navTween = gsap.timeline({
            ScrollTrigger: {
                trigger: 'nav',
                start: 'bottom top', // starts when the nav element's bottom reaches the top of the viewport, is what this line means.
            }
        });
        navTween.fromTo('nav', {
            backgroundColor: 'transparent',
        }, {
            backgroundColor: '#00000050', //30% in hexadecimal
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        })
    }, [])

    return (
        <div className="w-full h-full p-5">
            <nav className="w-full xl:max-w-[1120px] md:max-w-[750px] lg:max-w-[1000px] mx-auto flex-center flex-col md:flex-row gap-6 sm:gap-8 md:gap-0
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
