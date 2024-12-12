
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Not Found</h2>
        <p className="text-gray-600 mb-4">Could not find requested resource</p>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Return Home
        </Link>
      </div>
    </div>
  )
}
