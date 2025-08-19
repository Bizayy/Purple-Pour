import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { openingHours, socials, storeInfo } from "../Constants"
import Link from "next/link"
import { SplitText } from "gsap/all"
import { RefObject } from "react"

const Footer = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {

    useGSAP(() => {

        const titleSplit = SplitText.create('.title', { type: 'words' })

        const footerScroll = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 60%',
            }
        })
        footerScroll
            .from(titleSplit.words, {
                opacity: 0,
                stagger: 0.04,
                y: 30,
                ease: 'power1.inOut'
            })
            .from('.footer h2, .footer p, .footer li', {
                y: 40,
                duration: 1,
                opacity: 0,
                stagger: 0.02,
                ease: 'power1.inOut'
            })
            .to('.left-leaf, .right-leaf', {
                y: -50,
                duration: 1,
                ease: 'power1.inOut',
            })
    }, [])

    return (
        <footer className="relative radial-gradient min-h-dvh text-center overflow-hidden footer" ref={ref}>

            <div className="pt-20 absolute left-1/2 -translate-x-1/2">
                <h1 className="text-4xl lg:text-6xl mb-5 title">{storeInfo.heading}</h1>
                <h2 className="text-lg mb-2 font-semibold">VISIT OUR BAR</h2>
                <p className="md:text-2xl">{storeInfo.address}</p>

                <h2 className="uppercase text-lg mt-8 mb-2 font-semibold">Contact Us</h2>
                <p className="md:text-2xl">{storeInfo.contact.phone}</p>
                <p className="md:text-2xl">{storeInfo.contact.email}</p>

                <h2 className="uppercase text-lg mt-8 mb-2 font-semibold">Open Every day</h2>
                <ul className="md:text-2xl">
                    {openingHours.map((details, index) => (
                        <li key={index} className="">
                            {details.day} : {details.time}
                        </li>
                    ))}
                </ul>

                <div className="mt-8">
                    <h2 className="uppercase text-lg mb-2">Socials</h2>
                    <div className="flex-center gap-4 mx-auto w-fit">
                        {socials.map((social) => (
                            <Link href={social.url} key={social.name}>
                                <Image src={social.icon} width={30} height={30} alt={social.name} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


            <Image src='/images/footer-left-leaf.png' width={356} height={393} alt='footer-left-leaf'
                className="absolute left-0 bottom-0 left-leaf w-1/3 md:w-fit pointer-events-none" />
            <Image src='/images/footer-right-leaf.png' width={308} height={316} alt='footer-left-leaf'
                className="absolute right-0 hidden md:block top-0 right-leaf w-1/3 md:w-fit pointer-events-none" />
        </footer>
    )
}

export default Footer
