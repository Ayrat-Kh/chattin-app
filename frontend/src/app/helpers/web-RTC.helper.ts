

export const getLocalPreviewAndInitConnection = async (): Promise<MediaStream | null> => {
  if (navigator) {
    try {
      return await navigator.mediaDevices.getUserMedia(defaultConstraints);
    } catch(error) {
      console.error('Couldn\t get a video stream', error)
    }
  } else {
    console.error('Browser doesn\'t support a stream')
  }
  return null;
}

const defaultConstraints = {
  audio: true,
  video: true
}