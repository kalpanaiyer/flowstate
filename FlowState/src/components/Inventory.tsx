import React from 'react';
import { useState } from 'react';
import EnvironInvenCard from './EnvCards/EnvironInvenCard';
import AudioInvenCard from './AudioCards/AudioInvenCard';

function SoundContent() {
  return (
    <div className='flex gap-5 flex-wrap'>
      <AudioInvenCard
        image='/images/sound_icons/rain.svg'
        name='Rainy Day'
      />
      <AudioInvenCard
        image='/images/sound_icons/brown_noise.png'
        name='Brown Noise'
      />
      <AudioInvenCard
        image='/images/sound_icons/water.svg'
        name='River Flow'
      />
      <AudioInvenCard
        image='/images/sound_icons/gong.svg'
        name='Soundbath'
      />
      <AudioInvenCard
        image='/images/sound_icons/sound-waves.svg'
        name='White Noise'
      />
    </div>
  );
};

function EnvironmentContent() {
  return (
    <div className='flex gap-5 flex-wrap'>
      <EnvironInvenCard
        image='/images/underwater.png'
        name='Under the Sea'
      />
      <EnvironInvenCard
        image='/images/rainforest_bg.jpg'
        name='Rainforest'
      />
      <EnvironInvenCard
        image='/images/cafe_bg.gif'
        name='Cafe'
      />
      <EnvironInvenCard />
      <EnvironInvenCard />
      <EnvironInvenCard />
    </div>
  );
};

const Inventory: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <div>
      <div className="flex gap-5">
        <button
          onClick={() => setActiveTab('tab1')}
          className={`rounded-[15px] w-[198px] h-[39px] font-[Pixelify_Sans] text-[24px] mb-5 hover:cursor-pointer ${
            activeTab === 'tab1'
              ? 'bg-white text-[#ADA7C9]'
              : 'bg-[#ADA7C9] text-white'
          }`}
        >
          Environments
        </button>
        <button
          onClick={() => setActiveTab('tab2')}
          className={`rounded-[15px] w-[198px] h-[39px] font-[Pixelify_Sans] text-[24px] mb-5 hover:cursor-pointer ${
            activeTab === 'tab2'
              ? 'bg-white text-[#ADA7C9]'
              : 'bg-[#ADA7C9] text-white'
          }`}
        >
          Sounds
        </button>
      </div>

      <div>
        {activeTab === 'tab1' && <EnvironmentContent/>}
        {activeTab === 'tab2' && <SoundContent/>}
      </div>
    </div>
  );
};

export default Inventory;