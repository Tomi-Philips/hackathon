import { useRef, useState, useEffect } from "react";

const OtherLanding = () => {
    const specializationRef = useRef<HTMLDivElement>(null);
    const [showScrollLeft, setShowScrollLeft] = useState(false);
    const [showScrollRight, setShowScrollRight] = useState(true);

    const handleScroll = () => {
        if (specializationRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = specializationRef.current;
            setShowScrollLeft(scrollLeft > 0);
            setShowScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollRight = () => {
        if (specializationRef.current) {
            specializationRef.current.scrollLeft += 50;
        }
    };

    const scrollLeft = () => {
        if (specializationRef.current) {
            specializationRef.current.scrollLeft -= 50;
        }
    };

    useEffect(() => {
        if (specializationRef.current) {
            specializationRef.current.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
            return () => {
                specializationRef.current?.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className="bg-white flex justify-center">
            <div className="w-[80%] my-10">
                <h1 className="bg-gradient-to-r from-red-400 via-blue-900 to-blue-200 bg-clip-text mb-5 text-center text-transparent font-normal text-sm">
                    Talk to a Certified Doctor and be assured
                </h1>
                <div className="flex gap-2 items-center">
                    {showScrollLeft && (
                        <button
                            className="px-2 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none active:bg-gray-900/20 btn_color_light btn_border border"
                            type="button"
                            onClick={scrollLeft}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5M11.25 19.5l-7.5-7.5 7.5-7.5" />
                            </svg>
                        </button>
                    )}
                    <div className="flex gap-2 w-full custom-scrollbar-thin overflow-x-auto overflow-y-hidden" ref={specializationRef}>
                        <button className="px-6 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                            All
                        </button>
                        <button className="btn_color align-middle select-none text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-6 border btn_border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full flex gap-2 items-center" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z" clipRule="evenodd" />
                            </svg>
                            <span>Nephrologist</span>
                        </button>
                        <button className="px-6 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                            Urologist
                        </button>
                        <button className="px-6 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                            Endocrinologist
                        </button>
                        <button className="px-6 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                            Cardiologist
                        </button>
                        <button className="px-6 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                            Immunologist
                        </button>
                        <button className="px-6 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                            Anesthesiologist
                        </button>
                        <button className="px-6 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                            Opthalmonologist
                        </button>
                    </div>
                    {showScrollRight && (
                        <button
                            className="px-2 py-2 text-sm text-center text-gray-900 align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none active:bg-gray-900/20 btn_color_light btn_border border"
                            type="button"
                            onClick={scrollRight}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OtherLanding;
