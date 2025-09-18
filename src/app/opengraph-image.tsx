import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'EcoSofia - Природне здоров&apos;я та сучасні рішення'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fdf2f8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#E8888A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '50px',
              fontWeight: 'bold',
              marginRight: '30px',
            }}
          >
            ES
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#1f2937',
            }}
          >
            EcoSofia
          </div>
        </div>
        <div
          style={{
            fontSize: '36px',
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.2,
          }}
        >
          Природне здоров&apos;я та сучасні рішення
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#9ca3af',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Кваліфіковані спеціалісти • Якісні послуги • Екологічні рішення
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
