import Link from "next/link";

export default function HomePage() {
  return (
    <div>
        <h1 className="text-2xl">Welcome</h1>
        <Link href={'/properties'}>Go to properties</Link>
    </div>

)
}
