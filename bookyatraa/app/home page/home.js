export default function Home() {
  return (
    <div className="home">
      <header className=''>
        <div className="">
            <img src="../img/homepage/logo.png" alt="logo" className="w-20 h-20" />
            <button className=''>Home</button>
            <button className=''>Hotel</button>
            <Link href="../qualifications" className=''>Flight</Link>
            <Link href="../projects"className=''>Login</Link>
            <button className=''>Sign Up</button>
            <p className='border-b-2 border-black p-1'></p>
        </div>
        </header>
    </div>
  );
}