import {
  MicrophoneIcon,
  PaperAirplaneIcon,
  PauseCircleIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { classNames } from '../../lib/functions';
import { Role } from '../../lib/enums';
import { IMessage } from '../../../@types';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import useSpeechRecognition from '../../hooks/useSpeechRecognition';

const Index = () => {
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const {
    stopSpeechRecognition,
    startSpeechRecognition,
    state: { transcript, status: statusSpeechRecognition },
  } = useSpeechRecognition();

  const pushMessage = async (message: IMessage) => {
    setIsLoading(true);
    setQuestion('');
    setMessages(prevState => [...prevState, message]);
    const response = await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, message] }),
    });
    const data = await response.json();
    setMessages(prevState => [
      ...prevState,
      { role: Role.Assistant, content: data.message },
    ]);
  };

  useEffect(() => {
    if (!isLoading) {
      textAreaRef.current?.focus();
    }
  }, [isLoading]);

  useEffect(() => {
    if (transcript) {
      setQuestion(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textarea = textAreaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [question]);

  return (
    <section className="flex min-h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="flex w-full grow items-center justify-center">
        <div className="max-h-168 w-full max-w-md overflow-y-auto rounded-md bg-white p-6">
          <div className="space-y-4 rounded-md bg-gray-50 p-2">
            {messages.map((message, index) => {
              const isAssistant = message.role === Role.Assistant;
              return (
                <div
                  key={index}
                  className={classNames(
                    'flex',
                    isAssistant ? 'justify-start' : 'justify-end'
                  )}
                >
                  {isAssistant ? (
                    <div className="block w-max rounded-md bg-blue-200 px-1 py-0.5">
                      <Typewriter
                        options={{ delay: 25 }}
                        onInit={typewriter => {
                          typewriter
                            .typeString(message.content)
                            .callFunction(state => {
                              const cursorElement = state.elements.cursor;
                              cursorElement.style.display = 'none';
                              setIsLoading(false);
                            })
                            .start();
                        }}
                      />
                    </div>
                  ) : (
                    <p className="block w-max rounded-md bg-green-200 px-1 py-0.5">
                      {message.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <form
            className="mt-2 border-t-2 border-amber-200"
            onSubmit={async e => {
              e.preventDefault();
              await pushMessage({ role: Role.User, content: question });
            }}
          >
            <label
              htmlFor="name"
              className="sr-only block text-sm font-medium leading-6 text-gray-900"
            >
              Pregunta
            </label>
            <div className="mt-2 flex">
              <div className="relative grow">
                <textarea
                  ref={textAreaRef}
                  name="name"
                  id="name"
                  required
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  className="peer block w-full resize-none border-0 bg-gray-50 px-1 py-1.5 text-gray-900 focus:ring-0 disabled:opacity-50 sm:text-sm sm:leading-6"
                  placeholder="Hola! A que te dedicas?"
                  disabled={isLoading}
                  rows={1}
                />
                <div
                  className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
              {question ||
              statusSpeechRecognition === 'not supported' ||
              statusSpeechRecognition === 'denied' ||
              statusSpeechRecognition === 'stop' ? (
                <button
                  type="submit"
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  disabled={isLoading}
                >
                  <PaperAirplaneIcon
                    className="-ml-0.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Enviar
                </button>
              ) : (
                <>
                  {statusSpeechRecognition === 'start' ? (
                    <button
                      type="button"
                      onClick={stopSpeechRecognition}
                      className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      disabled={isLoading}
                    >
                      <PauseCircleIcon
                        className="-ml-0.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Stop
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={startSpeechRecognition}
                      className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      disabled={isLoading}
                    >
                      <MicrophoneIcon
                        className="-ml-0.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Start
                    </button>
                  )}
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="pb-8">
        <Link className="text-white underline" href="/">
          ir a la versión web antigua
        </Link>
      </div>
    </section>
  );
};

export default Index;
