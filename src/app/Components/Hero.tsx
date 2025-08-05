import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText);

const Hero = () => {
    useGSAP(() => {
        const heroTitleSplit = new SplitText('.mainTitle', { type: 'chars' });
        const paragraphSplit = new SplitText('.paragraph', { type: 'lines' });

        heroTitleSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroTitleSplit.chars, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 1.2,
        })

        gsap.fromTo(paragraphSplit.lines, {
            y: 20,
            opacity: 0,
        }, {
            y: 0,
            ease: 'expo.out',
            duration: 0.8,
            opacity: 1,
            stagger: 0.1,

        })
    }, [])
    return (
        <section className='w-full bg-noisy -z-10'>
            <h1 className='text-7xl md:text-9xl font-semibold mt-40 md:mt-30 text-center [letter-spacing:2px] uppercase mainTitle'>Cocktails</h1>
            <Image src='/images/hero-left-leaf.png' alt="leftLeafImg" width={266} height={461}
                className="absolute w-1/3 md:w-fit -bottom-20 md:top-40"
            />
            <Image src='/images/hero-right-leaf.png' alt="rightLeafImg" width={266} height={461}
                className="absolute w-1/3 md:w-fit right-0 top-1/2 md:top-auto md:bottom-0"
            />
            <div className="absolute flex justify-between items-end w-full p-5 md:top-[70vh]">
                <div className="customContainer space-y-5 flex items-center justify-between">
                    <div className="hidden md:flex text-left flex-col gap-4">
                        <p>Cool. Crisp. Classic.</p>
                        <h1 className="text-5xl text-[#e7d393] paragraph opacity-0 translate-y-10">Sip the Spirit <br /> of Summer</h1>
                    </div>
                    <div className="md:w-1/3 text-center md:text-left flex flex-col gap-4">
                        <p className="opacity-0 translate-y-10 paragraph">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed
                            to delight your senses.
                        </p>
                        <Link href='#cocktails' className="text-white/70 font-semibold cursor-pointer">View Cocktails</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
