import Container from "@/components/ui/Container"

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 text-gray-400 border-t border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 wiserteam — ساخته شده با ❤️ توسط </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
