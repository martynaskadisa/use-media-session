/// <reference types="react-scripts" />


interface MediaMetadataOptions {
  title?: string;
  artist?: string;
  album?: string;
  artwork?: Array<{
    src: string;
    sizes?: string;
    type?: string;
  }>;
}

declare const MediaMetadata: {
  prototype: MediaMetadata;
  new (options: MediaMetadataOptions): MediaMetadata;
};

type PlaybackState = 'none' | 'paused' | 'playing';

interface MediaSession {
  metadata: MediaMetadata | null;
  playbackState: PlaybackState;
  setActionHandler: (action: string, handler: (() => void) | null) => void;
}




declare interface Navigator {
  mediaSession: MediaSession;
}
