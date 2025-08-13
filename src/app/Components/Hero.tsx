import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const videoRef = useRef<HTMLVideoElement>(null);

    let isMobileDevice = false;
    useEffect(() => {
        window.innerWidth < 768 ? isMobileDevice = true : isMobileDevice = false;
    }, [])

    useGSAP(() => {
        const heroTitleSplit = new SplitText('.mainTitle', { type: 'chars' });
        const paragraphSplit = new SplitText('.paragraph', { type: 'lines' });

        heroTitleSplit.chars.forEach((char) => char.classList.add('text-gradient'))
        gsap.to('.mainTitle', {
            opacity: 1,
            duration: 0.8,
        });

        gsap.from(heroTitleSplit.chars, {
            y: 80,
            duration: 1.4,
            stagger: 0.05,
            ease: 'expo.out',
        });

        // gsap.set(heroTitleSplit.chars, { opacity: 0, transform: 'translateY(100px)' });
        // gsap.to(heroTitleSplit.chars, {
        //     y: 0,
        //     stagger: 0.04,
        //     duration: 0.8,
        //     opacity: 1,
        //     ease: 'expo.out'
        // });

        // yesari pani kam garxa like the snippet commented above, but it must do that gsap.to('.mainTitle,{}) for the above code snip too.
        //chose to make it with similar approach for both classnames.

        gsap.to('.paragraph', {
            opacity: 1,
            duration: 0.8,
        });
        gsap.from(paragraphSplit.lines, {
            delay: 0.8,
            y: 300,
            stagger: 0.05,
            duration: 1.2,
            ease: 'expo.out'
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }).to('.leftLeaf', {
            y: -200,
        }, 0).to('.rightLeaf', {
            y: 200,
        }, 0)

        const videoElement = videoRef.current;
        const startValues = isMobileDevice ? 'top 50%' : 'center 50%';
        const endValues = isMobileDevice ? '120% top' : 'bottom top';
        if (videoElement) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.video',
                    start: startValues,
                    end: endValues,
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,
                    onUpdate: (self) => {
                        // Control video playback based on scroll progress
                        if (videoElement.duration) {
                            const progress = self.progress;
                            videoElement.currentTime = progress * videoElement.duration;

                        }
                    }
                }
            })
        }


    }, [])
    return (
        <>
            <section className="w-full min-h-dvh relative z-10" id="hero">
                <div className="bg-noisy">
                    <h1 className='text-7xl md:text-9xl xl:text-[180px] font-semibold mt-20 md:mt-16 text-center [letter-spacing:2px] opacity-0 uppercase mainTitle'>Cocktails</h1>
                    <Image src='/images/hero-left-leaf.png' alt="leftLeafImg" width={266} height={461}
                        className="leftLeaf absolute w-1/3 md:w-fit bottom-12 md:-bottom-20 md:top-40 lg:top-30"
                    />
                    <Image src='/images/hero-right-leaf.png' alt="rightLeafImg" width={266} height={461}
                        className="rightLeaf absolute w-1/4 md:w-fit right-0 top-1/3 md:top-auto md:bottom-0 lg:top-0"
                    />
                    <div className="absolute flex justify-between items-end w-full p-5 lg:top-[60vh]">
                        <div className="customContainer space-y-5 flex items-center justify-between">
                            <div className="hidden lg:flex text-left flex-col gap-4">
                                <p>Cool. Crisp. Classic.</p>
                                <h1 className="text-5xl text-[#e7d393] opacity-0 paragraph">Sip the Spirit <br /> of Summer</h1>
                            </div>
                            <div className="lg:w-1/3 text-center lg:text-left flex flex-col gap-4">
                                <p className="opacity-0 paragraph">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed
                                    to delight your senses.
                                </p>
                                <Link href='#cocktails' className="text-white/70 font-semibold cursor-pointer opacity-0 paragraph">View Cocktails</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/*
                <div className="w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover">
            */}
            <div className="video absolute bottom-0 left-0 h-1/2 md:h-8/10 z-0 pt-56 sm:pt-20 md:pt-20 lg:pt-10 xl:pt-5 inset-0 w-full md:object-contain object-bottom
                mx-auto min-[450px]:pt-40 min-[550px]:pt-36 min-[700px]:pt-10 md:min-[850px]:pt-10 md:min-[950px]:pt-0">

                <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="metadata" className="w-full lg:w-[80%] mx-auto bg-transparent"
                />
            </div>
        </>
    )
}

export default Hero

