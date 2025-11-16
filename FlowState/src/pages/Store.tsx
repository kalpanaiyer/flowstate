import AudioCard from '../components/AudioCard';

const Store: React.FC = () => {
  return (
    <>
      <AudioCard 
        image='/images/rain.svg'
        name='Rainy Day'
        description='A calming soundscape mirroring a rainy day.'
        notes_amt={25}
        audio='/audio/rainnoise.mp3'
      />
    
    </>
  )
};

export default Store;