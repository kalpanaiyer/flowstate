import AudioCard from '../components/AudioCard';
import './Store.css';

const Store: React.FC = () => {
  return (
    <div className='store-page p-10'>
      <h1 className='text-[64px]'>STORE</h1>
      <p className='text-[#696969] text-[40px] mb-10'>Use your notes to purchase new sounds or environments!</p>

      <div className='flex gap-5'>
        <AudioCard 
          image='/images/rain.svg'
          name='Rainy Day'
          description='A calming soundscape mirroring a rainy day.'
          notes_amt={25}
          audio='/audio/rainnoise.mp3'
        />

        <AudioCard
          image='/images/brown_noise.png'
          name='Brown Noise'
          description='A smooth tone to tune out the background noise.'
          notes_amt={25}
          audio='/audio/brownnoise.mp3'
        />
      </div>
      
    
    </div>
  )
};

export default Store;