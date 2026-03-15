import { useState } from "react"

export const MicIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-300" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M19.07 12.01a1 1 0 0 1 .85 1.132A8.004 8.004 0 0 1 13 19.938V21a1 1 0 1 1-2 0v-1.062a8.005 8.005 0 0 1-6.919-6.796a1 1 0 0 1 1.98-.284a6.001 6.001 0 0 0 11.878 0a1 1 0 0 1 1.132-.848ZM12 2a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5"></path></g></svg>
}

export const Loader = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="text-white animate-spin" width={24} height={24} viewBox="0 0 24 24"><defs><linearGradient id="mingcuteLoadingFill0" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stopColor="currentColor"></stop><stop offset="100%" stopColor="currentColor" stopOpacity={0.55}></stop></linearGradient><linearGradient id="mingcuteLoadingFill1" x1="50%" x2="50%" y1="15.24%" y2="87.15%"><stop offset="0%" stopColor="currentColor" stopOpacity={0}></stop><stop offset="100%" stopColor="currentColor" stopOpacity={0.55}></stop></linearGradient></defs><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="url(#mingcuteLoadingFill0)" d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021" transform="translate(1.5 1.625)"></path><path fill="url(#mingcuteLoadingFill1)" d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118" transform="translate(1.5 1.625)"></path></g></svg>
}

export const XIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"></path></svg>
}

export const FilterIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16v2H4zm0 6h10v2H4zm0 6h16v2H4zm0 6h10v2H4z"></path></svg>
}

export const SearchIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} className="text-white" viewBox="0 0 24 25"><path fill="white" d="M11.25 5.75a.75.75 0 0 0 0 1.5A4.75 4.75 0 0 1 16 12a.75.75 0 0 0 1.5 0a6.25 6.25 0 0 0-6.251-6.25"></path><path fill="currentColor" fillRule="evenodd" d="M2 11.999C2 6.89 6.142 2.75 11.25 2.75s9.25 4.14 9.25 9.248a9.2 9.2 0 0 1-2.202 5.99l3.481 3.48a.75.75 0 1 1-1.06 1.061l-3.482-3.481a9.2 9.2 0 0 1-5.987 2.198c-5.108 0-9.25-4.14-9.25-9.248m9.25-7.748a7.749 7.749 0 1 0 0 15.496a7.749 7.749 0 1 0 0-15.496" clipRule="evenodd"></path></svg>
}

export const BuildingIcon = () => (
    <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center shrink-0 shadow-sm text-white">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    </div>
);

export const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
);

export const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const BrainIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

export const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m18.157 16.882l-1.187 1.174q-1.312 1.288-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.49-3.396q-.66-.646-1.103-1.09a8.707 8.707 0 1 1 12.314 0M14.501 11a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></path></svg>
)

export const TickIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={24} height={24} viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"></path><path d="m5.75 7.75l2.5 2.5l6-6.5"></path></g></svg>
)

export const PlayIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const StarIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export const Menu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path></svg>
)

export const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"></path></g></svg>)

export const BottomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width={18} height={18} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M30 12L16 24L2 12"></path></svg>
)

export const UpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width={18} height={18} viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M10.103 7.222q5.17 5.202 6.89 6.887c.198.185.539.56 1.046.07q.508-.49-.039-1.073l-7.444-7.43a.64.64 0 0 0-.455-.176a.7.7 0 0 0-.472.176l-7.453 7.635q-.362.582.03.98q.39.398.95.043z"></path></svg>
)

export const HangUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 24 24"><path fill="currentColor" d="M18.59 10.52c1.05.51 2.04 1.15 2.96 1.91l-1.07 1.07c-.58-.47-1.21-.89-1.88-1.27v-1.71m-13.2 0v1.7c-.65.37-1.28.79-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.38 2.94-1.9M12 7C7.46 7 3.34 8.78.29 11.67c-.18.18-.29.43-.29.71s.11.53.29.7l2.48 2.48c.18.18.43.29.71.29c.27 0 .52-.1.7-.28c.79-.73 1.68-1.36 2.66-1.85c.33-.16.56-.51.56-.9v-3.1C8.85 9.25 10.4 9 12 9s3.15.25 4.59.73v3.1c0 .4.23.74.56.9c.98.49 1.88 1.11 2.67 1.85c.18.17.43.28.7.28c.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.11-.53-.29-.71A16.97 16.97 0 0 0 12 7"></path></svg>
)

export const AIMic = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M19.07 12.01a1 1 0 0 1 .85 1.132A8.004 8.004 0 0 1 13 19.938V21a1 1 0 1 1-2 0v-1.062a8.005 8.005 0 0 1-6.919-6.796a1 1 0 0 1 1.98-.284a6.001 6.001 0 0 0 11.878 0a1 1 0 0 1 1.132-.848M12 2c.819 0 1.592.197 2.274.546a3 3 0 0 0 .757 5.293l.378.13a1 1 0 0 1 .623.622l.129.378c.17.5.464.932.839 1.267V12a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5m7-1a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 1" /></g></svg>
)

export const ErrorCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 20 20"><g fill="none"><path fill="url(#fluentColorErrorCircle200)" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16" /><path fill="url(#fluentColorErrorCircle201)" fillRule="evenodd" d="M10.5 6.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0zM10 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clipRule="evenodd" /><defs><linearGradient id="fluentColorErrorCircle200" x1="4.5" x2="15" y1="-.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop stopColor="#ffcd0f" /><stop offset="1" stopColor="#fe8401" /></linearGradient><linearGradient id="fluentColorErrorCircle201" x1="8" x2="12" y1="6" y2="14" gradientUnits="userSpaceOnUse"><stop stopColor="#4a4a4a" /><stop offset="1" stopColor="#212121" /></linearGradient></defs></g></svg>
)

export const RightArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z" clipRule="evenodd"></path></svg>
)

export const getCompanyDomain = (name: string) => {
    let cleanName = name.toLowerCase().trim();
    if (cleanName.includes('amazon') || cleanName === 'aws') return 'amazon.com';
    if (cleanName === 'faang') return null; // No specific domain for faang
    
    // Remove anything in parentheses
    cleanName = cleanName.replace(/\([^)]*\)/g, '').trim();
    // Remove spaces
    cleanName = cleanName.replace(/\s+/g, '');
    return cleanName ? `${cleanName}.com` : null;
};

export const CompanyIcon = ({ name, className = "" }: { name: string, className?: string }) => {
    const [imgError, setImgError] = useState(false);
    const domain = getCompanyDomain(name);
    const logoUrl = domain ? `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128` : null;

    if (!domain || imgError) {
        return (
            <div className={`w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center shrink-0 text-white font-bold text-sm shadow-sm ${className}`} title={name}>
                {name.charAt(0).toUpperCase()}
            </div>
        );
    }

    return (
        <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 shadow-sm ${className}`} title={name}>
            <img 
                src={logoUrl || undefined} 
                alt={`${name} logo`} 
                className="w-full h-full object-contain p-[3px]"
                onError={() => setImgError(true)}
            />
        </div>
    );
};
