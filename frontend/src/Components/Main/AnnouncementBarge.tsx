
const AnnouncementBarge = () => {
    return (
        <div>
            <div data-dismissible="alert" role="alert" className="font-regular relative flex w-full rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-1 py-1 text-base text-white">
                <div className="shrink-0">
                    🎉
                </div>
                <div className="ml-3 mr-12">
                 Announcing new features soon
                </div>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </span>
            </div>  
        </div>
    )
}

export default AnnouncementBarge
