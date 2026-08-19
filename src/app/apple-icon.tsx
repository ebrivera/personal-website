import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const fontData = await readFile(
    join(process.cwd(), 'src/app/icon-assets/IBMPlexSerif-Bold.ttf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1C1917',
          color: '#F5F1EA',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'IBM Plex Serif',
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          EBR
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'IBM Plex Serif', data: fontData, weight: 700, style: 'normal' }],
    }
  );
}
