import Link from "next/link";
export const Header = () => (
  <div className="p-10 flex items-center gap-4">
    <Link className="p-4 bg-cyan-400 rounded-xl" href="/clock">
      Clock
    </Link>
    <Link className="p-4 bg-cyan-400 rounded-xl" href="/stopwatch">
      Stopwatch
    </Link>
    <Link className="p-4 bg-cyan-400 rounded-xl" href="/timer">
      Timer
    </Link>
  </div>
);
