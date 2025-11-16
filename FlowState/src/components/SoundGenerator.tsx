import React, { useState } from 'react';

const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY; 
const SOUND_MODEL_ID: string = 'eleven_text_to_sound_v2'; 

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [audioURL, setAudioURL] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const generateSound = async () => {
    if (!prompt.trim()) return;


    setIsLoading(true);
    setAudioURL(''); 
    setError('');

    try {
      const response = await fetch(
        `https://api.elevenlabs.io/v1/sound-generation`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': ELEVENLABS_API_KEY, 
          },
          body: JSON.stringify({
            text: prompt,
            model_id: SOUND_MODEL_ID,
            duration_seconds: 30, 
          }),
        }
      );

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("ElevenLabs Error Details:", errorBody);
        
        let errorMessage = `API error ${response.status}: ${response.statusText}.`;
        
        try {
            const errorJson = JSON.parse(errorBody);
            if (errorJson.detail) {
                errorMessage = errorJson.detail.message || JSON.stringify(errorJson.detail);
            }
        } catch (e) {
            console.log("AHHHH")
        }

        throw new Error(errorMessage);
      }

      const audioBuffer: ArrayBuffer = await response.arrayBuffer();
      
      const audioBlob: Blob = new Blob([audioBuffer], { type: 'audio/mpeg' });
      const url: string = URL.createObjectURL(audioBlob);
      setAudioURL(url);

    } catch (err) {
      const error = err as Error; 
      console.error("ElevenLabs API Error:", error);
      setError(`Failed to generate sound: ${error.message || 'Check console for details.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      generateSound();
    }
  };

  return (
    <div>
        

        <div className="flex flex-row space-x-4 items-end"> 
          <input
            type="text"
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. White Noise or Calm Ocean"
            disabled={isLoading}
            className="w-60 px-4 py-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white"
          />
          <button 
            onClick={generateSound} 
            disabled={isLoading || !prompt.trim() || error.includes("set your MOCK_API_KEY")}
            className={`w-auto py-3 px-4 rounded-lg font-semibold transition duration-200 shadow-md ${
              (isLoading || !prompt.trim() || error.includes("set your MOCK_API_KEY")) 
                ? 'bg-blue-300 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Audio...
              </span>
            ) : 'Generate Sound'}
          </button>
        </div>

        {error && (
          <p className="mt-4 text-sm font-medium text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            Error: {error}
          </p>
        )}

        {audioURL && (
          <div className="w-150 mt-6 p-4 bg-green-50 rounded-lg shadow-inner">
            {/* The HTML5 Audio Element for Playback */}
            <audio 
              controls 
              src={audioURL} 
              className="w-full"
              onPlay={() => console.log('Audio playing!')}
              onError={(e: React.SyntheticEvent<HTMLAudioElement, Event>) => console.error('Audio playback error:', e)}
            />
          </div>
        )}
    </div>
  );
};

export default App;