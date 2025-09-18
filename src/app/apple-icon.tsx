import { ImageResponse } from 'next/og'
 
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 180,
          background: '#E8888A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20px',
        }}
      >
        ES
      </div>
    ),
    {
      width: 180,
      height: 180,
    }
  )
}
