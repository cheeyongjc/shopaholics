import { Search, second } from './'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function Navigation() {
    return (
        <header className='min-w-[1000px]'>
            <div className='flex bg-shopaholics text-white h-[60px]'>
                <div className='flex items-center m-4'>
                    <img className='h-[35px] w-[100px] m-2' src={'../images/amazon.png'} />
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Deliver to</div>
                        <div className='text-sm xl:test-base font-bold'>United States</div>
                    </div>

                </div>
                <div className='flex grow relative items-center'>
                    <Search />
                </div>
                <div className='flex items-center m-4'>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Hell, sign in</div>
                        <div className='text-sm xl:test-base font-bold'>Accounts & Lists</div>
                    </div>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Returns</div>
                        <div className='text-sm xl:test-base font-bold'>& Orders</div>
                    </div>
                    <div className='flex pr-3 pl-3'>
                        <ShoppingCartIcon className='h-[48px]' />
                        <div className='mt-7 text-xs xl:text-sm font-bold'>
                            Cart
                        </div>
                    </div>
                </div>
                <div className='flex bg-shopaholics-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
                    <div>
                        Today's Deals
                    </div>
                    <div>
                        Customer Service
                    </div>
                    <div>
                        Registry
                    </div>
                    <div>
                        Gift Cards
                    </div>
                    <div>
                        Sell
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation
