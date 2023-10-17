import Image from 'next/image'

export default function Home() {
  return (
    <main className="main-text-container">
      <div>
        <h1> Image Classifier Test </h1>
        <div className="main-content">
          <div className="image-container"></div>
          <div className="classifier-results"></div>
        </div>
        <footer>
          <p> Built by Lex Byrne using Next.js</p>
        </footer>
      </div>
    </main>
  )
}
