import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
import { cocktailLists, mockTailLists } from "../Constants"

const Cocktails = () => {

    useGSAP(() => {

    }, [])

    return (
        <section id='cocktails' className='bg-black/50 relative'>
            <div className="bg-[url(/images/noise.png)] p-5">
                <Image src='/images/cocktail-left-leaf.png' width={294} height={332} alt="cocktailLeftLeafImg" id="c-left-leaf" className="w-1/3 md:w-fit absolute left-0" />
                <Image src='/images/cocktail-right-leaf.png' width={294} height={332} alt="cocktailRightLeafImg" id="c-right-leaf" className="w-1/3 md:w-fit absolute right-0" />
                <div className="flex flex-col gap-12 customContainer">
                    <div className="">
                        <h2 className="mb-7 text-lg font-semibold">Most popular cocktails:</h2>
                        <ul className="flex flex-col gap-7">
                            {cocktailLists.map((cocktail) => (
                                <li key={cocktail.name} className="flex items-start justify-between">
                                    <div className="flex flex-col gap-1 items-start">
                                        <h1 className="font-medium text-[#e7d393] text-xl">{cocktail.name}</h1>
                                        <span className="text-sm">{cocktail.country} | {cocktail.detail}</span>
                                    </div>
                                    <p className="text-xl font-medium">
                                        - {cocktail.price}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-7 text-lg font-semibold">Most loved mocktails:</h2>
                        <ul className="flex flex-col gap-7 customContainer">
                            {mockTailLists.map((mocktail) => (
                                <li key={mocktail.name} className="flex items-start justify-between">
                                    <div className="flex flex-col gap-1 items-start">
                                        <h1 className="font-medium text-[#e7d393] text-xl">{mocktail.name}</h1>
                                        <span className="text-sm">{mocktail.country} | {mocktail.detail}</span>
                                    </div>
                                    <p className="text-xl font-medium">
                                        - {mocktail.price}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cocktails
