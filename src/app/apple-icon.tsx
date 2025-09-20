import { ImageResponse } from 'next/og'
 
// Remove the named GET export function and use default export instead
// This avoids the conflict with Next.js's automatically generated GET function
export default function AppleIcon() {
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
