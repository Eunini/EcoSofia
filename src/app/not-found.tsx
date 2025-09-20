import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

// Export a separate viewport config instead of including it in metadata
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Сторінку не знайдено - EcoSofia',
  description: 'Вибачте, але сторінку, яку ви шукаєте, не знайдено.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F1D5C9]">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mt-2">
          Сторінку не знайдено
        </h2>
        <p className="text-gray-600 mt-4">
          Вибачте, але сторінку, яку ви шукаєте, не знайдено. Можливо, вона була переміщена або видалена.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button className="bg-[#E8888A] hover:bg-rose-500 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Повернутися на головну
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
