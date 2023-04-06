import './globals.css'

export const metadata = {
  title: 'Maikol aguilar portfolia',
  description: 'Curriculum with IA',
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}
