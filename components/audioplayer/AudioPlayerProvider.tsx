import { useEffect, useReducer, useRef } from 'react'
import {
  PlayerState,
  PlayerContext,
  PlayerReducer,
} from '@lib/hooks/use-player'
import AudioElement from './AudioElement'

export const AudioPlayerProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const initialPlayerState: PlayerState = {
    currentIndex: null,
    current: null,
    playlist: [],
    loading: true,
    isPlaying: false,
    duration: 0,
  }

  const [
    { currentIndex, current, playlist, loading, isPlaying, duration },
    dispatch,
  ] = useReducer(PlayerReducer, initialPlayerState)

  const setCurrentIndex = (index: PlayerState['currentIndex']) =>
    dispatch({ type: 'SET_CURRENT_INDEX', payload: index })

  const setPlaylist = (playlist: PlayerState['playlist']) =>
    dispatch({ type: 'SET_PLAYLIST', payload: playlist })

  const setLoading = (loading: PlayerState['loading']) =>
    dispatch({ type: 'SET_LOADING', payload: loading })

  const setIsPlaying = (isPlaying: PlayerState['isPlaying']) =>
    dispatch({ type: 'SET_IS_PLAYING', payload: isPlaying })

  const setDuration = (duration: PlayerState['duration']) =>
    dispatch({ type: 'SET_DURATION', payload: duration })

  const toggleAudio = () => {
    if (!audioRef.current) return
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
  }

  const play = (track: TEpisode) => {
    if (!audioRef.current) return
    audioRef.current.src = track.urls.high_mp3
    audioRef.current.play()
  }

  const nextEpisode = () => {
    if (currentIndex >= playlist.length - 1) return null
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setCurrentIndex(currentIndex + 1)
    audioRef.current.src = playlist[currentIndex + 1].urls.high_mp3
    audioRef.current.play()
  }

  const prevEpisode = () => {
    if (!audioRef.current) return
    audioRef.current.pause()
    if (audioRef.current.currentTime > 5 || currentIndex === 0) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      audioRef.current.currentTime = 0
      setCurrentIndex(currentIndex - 1)
      audioRef.current.src = playlist[currentIndex - 1].urls.high_mp3
      audioRef.current.play()
    }
  }

  const seekForward = (time: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = audioRef.current.currentTime + time
  }

  const replay = (time: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = audioRef.current.currentTime - time
  }

  const updateTime = (time: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = time
  }

  useEffect(() => {
    if ('mediaSession' in navigator && current) {
      const { mediaSession }: any = navigator
      mediaSession.metadata = new (window as any).MediaMetadata({
        title: current.title,
        artist: current.channel.title,
        album: current.channel.title,
        artwork: [
          {
            src: current.urls.image || current.channel.urls.logo_image.original,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: current.urls.image || current.channel.urls.logo_image.original,
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      })
      // Clean up media session metadata
      return () => {
        mediaSession.metadata = null
      }
    }
  }, [current])

  useEffect(() => {
    if ('mediaSession' in navigator) {
      const next = currentIndex < playlist.length - 1 ? nextEpisode : null
      const { mediaSession }: any = navigator
      mediaSession.setActionHandler('previoustrack', prevEpisode)
      mediaSession.setActionHandler('nexttrack', next)

      return () => {
        // Clean up media session handlers
        mediaSession.setActionHandler('previoustrack', null)
        mediaSession.setActionHandler('nexttrack', null)
      }
    }
  }, [currentIndex, playlist])

  useEffect(() => {
    if ('mediaSession' in navigator) {
      const { mediaSession }: any = navigator
      mediaSession.setActionHandler('play', () => {
        audioRef.current.play()
      })
      mediaSession.setActionHandler('pause', () => {
        audioRef.current.pause()
      })
      mediaSession.setActionHandler('seekbackward', () => {
        replay(15)
      })

      mediaSession.setActionHandler('seekforward', () => {
        seekForward(30)
      })

      return () => {
        // Clean up media session handlers
        mediaSession.setActionHandler('play', null)
        mediaSession.setActionHandler('pause', null)
        mediaSession.setActionHandler('seekbackward', null)
        mediaSession.setActionHandler('seekforward', null)
      }
    }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        e.code === 'Space' &&
        current &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLButtonElement)
      ) {
        e.preventDefault()
        toggleAudio()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [toggleAudio])

  return (
    <PlayerContext.Provider
      value={{
        currentIndex,
        current,
        playlist,
        loading,
        isPlaying,
        duration,
        setCurrentIndex,
        setPlaylist,
        setLoading,
        setIsPlaying,
        setDuration,
        prevEpisode,
        nextEpisode,
        toggleAudio,
        play,
        seekForward,
        replay,
        updateTime,
      }}
    >
      {children}
      <AudioElement forwadedRef={audioRef} />
    </PlayerContext.Provider>
  )
}