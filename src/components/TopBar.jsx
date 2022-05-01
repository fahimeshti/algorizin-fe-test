import profileIcon from '../resources/prof.svg';
import bellIcon from '../resources/bell.svg';
import SearchField from './SearchField';

const TopBar = () => {
    return (
      <section className='relative w-100 z-50'>
        <div className='fixed top-0 left-0 w-screen flex items-center bg-white border-b'>
        
        <div className="p-3 pl-7 w-[8rem] md:w-[9rem] lg:w-[12rem] h-14">
          <span className='align-middle text-sm text-[#3E3F48] font-medium'>
            Starbucks
              <span className='align-top pl-1'>
                  <i className="fas fa-sort-down"></i>
              </span>
          </span>
        </div>

        <div className="hidden md:block flex-auto w-86 md:w-66">
          <SearchField />
        </div>

        <div className="flex-auto flex items-center justify-end pr-2 lg:pr-6 w-7 md:w-20 text-sm text-[#3E3F48]">
          <span className='p-2'>
              <img src={bellIcon} alt="" />
          </span>
          <span className='p-2'>
              <img src={profileIcon} alt="" />
          </span>
          <span className='p-2'>
              John Doe
          </span>
          <span className='mb-1'>
              <i className="fas fa-sort-down"></i>
          </span>
        </div>
        </div>
      </section>
    );
};

export default TopBar;