'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-5xl mb-12">My Amazing Video!!</h1>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="video_1080p_p0t8eo"
        sourceTypes={['hls']}
        transformation={{
          streaming_profile: 'hd',
        }}
      />
      <span className="mt-8">
        Video by <a href="https://www.pexels.com/video/icecaps-covering-the-mountains-ranges-3214448/">Pressmaster</a>
      </span>
    </main>
  );
}
