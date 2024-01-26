import Link from 'next/link';
export default function Home() {
  return (
        <div className="home">
          <header className="header">
            <div className="bookyatra">
              <p className="text-bold text-3xl">BOOKYATRA</p>
            </div>
            <div className="left-buttons">
              <button>Home</button>
              <button>Hotel</button>
              <button>Flight</button>
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </header>
        </div>

  );
}