import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function Navigation() {
    return (
        <header className='min-w-[1000px]'>
            <div className='flex bg-shopaholics text-white h-[60px]'>
                <div className='flex items-center'>
                    <img className='h-[35px] w-[100px] m-2' src={'../images/amazon.png'} />
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Deliver to</div>
                        <div className='text-sm xl:test-base font-bold'>United States</div>
                    </div>

                </div>
                <div className='flex items-center'>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Hell, sign in</div>
                        <div className='text-sm xl:test-base font-bold'>Accounts & Lists</div>
                    </div>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Returns</div>
                        <div className='text-sm xl:test-base font-bold'>& Orders</div>
                    </div>
                    <div className='flex pr-3 pl-3'>
                        <ShoppingCartIcon className='h-[48px]'/>
                    </div>
                </div>
                <div className='flex'></div>
            </div>
        </header>
    )
}

export default Navigation
