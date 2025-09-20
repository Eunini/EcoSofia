import { ImageResponse } from 'next/og'
 
// Remove the named GET export function and use default export instead
// This avoids the conflict with Next.js's automatically generated GET function
export default function Icon() {
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
