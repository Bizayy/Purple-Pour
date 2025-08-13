import Image from "next/image"
import { featureLists, goodLists } from "../Constants"

const ArtSection = () => {
    return (
        <section className="px-5 min-h-dvh mt-10">
            <div className="customContainer h-full radial-gradient pt-20">
                <div className="h-full flex-center flex-col gap-10">
                    <div className="relative">
                        <h1 className="text-[#505050] leading-none bg-clip-text text-8xl md:text-[20vw]">The ART</h1>

                        <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] md:-top-[20%] py-10 rounded-4xl overflow-hidden absolute top-0">
                            <Image src='/images/under-img.jpg' width={1500} height={1000} alt="underImg"
                                className="object-cover size-full masked-img"
                            />
                        </div>

                    </div>

                    <div className="mt-40 md:mt-10 w-full flex flex-col gap-10 md:flex-row md:justify-between">
                        <ul className="w-full space-y-4 will-fade">
                            {goodLists.map((ftr, index) => (
                                <li key={index} className="flex-center gap-2">
                                    <Image src='/images/check.png' width={16} height={16} alt="checkIconImg" />
                                    <span>
                                        {ftr}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex justify-end">
                            <ul className="space-y-4 will-fade w-fit">
                                {featureLists.map((ftr, index) => (
                                    <li key={index} className="flex-center gap-2">
                                        <Image src='/images/check.png' width={16} height={16} alt="checkIconImg" />
                                        <span>
                                            {ftr}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="masked-container">
                    <h1 className="will-fade e">Sip Worthy Perfection</h1>
                    <div className="masked-content">
                        <h1>Made with Craft, Poured with Passion.</h1>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtSection
