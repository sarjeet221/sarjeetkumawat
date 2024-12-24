import React from 'react';

export function HeadingWithAfter({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="inline-block font-semibold text-lg lg:text-2xl px-2 relative z-[1]
        after:content-[''] after:block after:h-[8px] after:w-full after:bg-green-300 after:absolute after:start-[0] after:z-[-1] after:top-0 after:bottom-0 after:my-auto">
            {children}
        </h3>
    );
}

export function BigSubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className='lg:text-[42px] sml:text-[30px] text-2xl text-blue-500 lg:my-4 my-1 font-bold'>
            {children}
        </h3>
    )
}

function Headingh1() {
    return <div>Heading</div>;
}

// export default Headingh1;
