import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
    return (
        <div className='w-[100%]'>
            <div className='flex items-center h-10 bg-shopaholics-yellow rounded'>
                <select className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'>
                    <options>All</options>
                    <options>Deals</options>
                    <options>Shopaholics</options>
                    <options>Fashion</options>
                    <options>Computers</options>
                    <options>Home</options>
                    <options>Mobiles</options>
                </select>
                <input className='flex grow items-center h[100%] rounded-1 text-black' type='text' />
                <button className='w-[45px]'>
                    <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
                </button>
            </div>
        </div>
    )
}

export default Search
