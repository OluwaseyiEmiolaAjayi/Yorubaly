import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header style={{backgroundColor:'#020035'
        }} className='shadow-md'> 
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
        <Link to='/'>
        <h1 className='text-sm sm:text-xl flex flex-wrap'>
          <span style={{ color: 'white' }}>YorubalY</span>
          <span className='text-white'>TOWN</span>
        </h1>
        </Link>

        <form style={{backgroundColor:'#fff'
        }} className='rounded-lg p-3 flex items-center'>
          <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64 md:w-32' />
          <FaSearch style={{color: '#000'}}/>
        </form>

        <ul className='flex gap-4 '>
          <Link to='/'>
          <li className='hidden sm:inline text-white hover:underline'>Home</li>
          </Link>

          <Link to='/about'>
          <li className='hidden sm:inline text-white hover:underline'>About</li>
          </Link>

          <Link to='/sign-in'>
          <li className='text-white hover:underline'>Sign in</li>
          </Link>
        </ul>
       </div>
    </header>
  )
}
