import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkMicrophonePermission } from '../lib/functions';

type SpeechRecognitionStatus =
  | 'not initialized'
  | 'not supported'
  | 'denied'
  | 'initialized'
  | 'stop'
  | 'start'
  | 'recording';

const useSpeechRecognition = () => {
  const [status, setStatus] =
    useState<SpeechRecognitionStatus>('not initialized');
  const [transcript, setTranscript] = useState('');
  const [speechRecognition, setSpeechRecognition] = useState<any>(null);
  const { locale } = useRouter();

  useEffect(() => {
    checkMicrophonePermission()
      .then(hasPermission => {
        if (!hasPermission) {
          setStatus('denied');
        }
      })
      .catch(() => {
        setStatus('denied');
      });
  }, []);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      return setStatus('not supported');
    }
    const speechRecognition = window.webkitSpeechRecognition;
    const recognition = new speechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = locale;

    recognition.onresult = (event: any) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscript(event.results[i][0].transcript);
          setStatus('initialized');
        }
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Error occurred in recognition: ' + event.error);
    };

    setStatus('initialized');
    setSpeechRecognition(recognition);
  }, []);

  useEffect(() => {
    if (speechRecognition) {
      speechRecognition.lang = locale;
    }
  }, [locale]);

  const startSpeechRecognition = () => {
    checkMicrophonePermission()
      .then(hasPermission => {
        if (!hasPermission) {
          setStatus('denied');
        } else {
          setStatus('start');
          speechRecognition && speechRecognition.start();
        }
      })
      .catch(() => {
        setStatus('denied');
      });
  };

  const stopSpeechRecognition = () => {
    setStatus('stop');
    speechRecognition && speechRecognition.stop();
  };

  return {
    startSpeechRecognition,
    stopSpeechRecognition,
    state: {
      transcript,
      status,
    },
  };
};

export default useSpeechRecognition;
