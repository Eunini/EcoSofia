import { ImageResponse } from 'next/og'
 
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#E8888A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        ES
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}
