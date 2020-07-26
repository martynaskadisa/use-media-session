import { useEffect } from 'react';

const isMediaSessionAvailable =
  typeof window !== 'undefined' && 'mediaSession' in window.navigator;

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

export const useMediaMeta = ({
  title,
  album,
  artist,
  artwork,
}: MediaMetadataOptions): void => {
  useEffect(() => {
    if (!isMediaSessionAvailable) return;

    window.navigator.mediaSession.metadata = new MediaMetadata({
      title,
      album,
      artist,
      artwork,
    });

    return () => {
      window.navigator.mediaSession.metadata = undefined;
    };
  }, [album, artist, artwork, title]);
};

type PlaybackState = 'none' | 'paused' | 'playing';

interface MediaSessionOptions {
  playbackState?: PlaybackState;
  onPlay?: () => void;
  onPause?: () => void;
  onSeekBackward?: () => void;
  onSeekForward?: () => void;
  onPreviousTrack?: () => void;
  onNextTrack?: () => void;
  onSeekTo?: () => void;
  onSkipAd?: () => void;
  onStop?: () => void;
  // @TODO: add support for positionState
}

const bindActionHandler = (action: string, callback?: () => void) => {
  if (!isMediaSessionAvailable || !callback) return;

  window.navigator.mediaSession.setActionHandler(action, callback);

  return () => {
    window.navigator.mediaSession.setActionHandler(action, null);
  };
};

export const useMediaSession = ({
  playbackState = 'none',
  onPause,
  onPlay,
  onNextTrack,
  onPreviousTrack,
  onSeekBackward,
  onSeekForward,
  onSeekTo,
  onSkipAd,
  onStop,
}: MediaSessionOptions): void => {
  useEffect(() => {
    if (!isMediaSessionAvailable) return;

    window.navigator.mediaSession.playbackState = playbackState;

    return () => {
      window.navigator.mediaSession.playbackState = 'none';
    };
  }, [playbackState]);

  useEffect(() => bindActionHandler('play', onPlay), [onPlay]);
  useEffect(() => bindActionHandler('pause', onPause), [onPause]);
  useEffect(() => bindActionHandler('nexttrack', onNextTrack), [onNextTrack]);
  useEffect(() => bindActionHandler('previoustrack', onPreviousTrack), [
    onPreviousTrack,
  ]);
  useEffect(() => bindActionHandler('seekbackward', onSeekBackward), [
    onSeekBackward,
  ]);
  useEffect(() => bindActionHandler('seekforward', onSeekForward), [
    onSeekForward,
  ]);
  useEffect(() => bindActionHandler('seekto', onSeekTo), [onSeekTo]);
  useEffect(() => bindActionHandler('skipad', onSkipAd), [onSkipAd]);
  useEffect(() => bindActionHandler('stop', onStop), [onStop]);
};
