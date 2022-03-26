import './App.css';
import ImageGallery from 'react-image-gallery'

function importarImagens(params) {
    let images = [];
    params.keys().map((item, index) => { 
      images.push({
        original: process.env.PUBLIC_URL + "/img/" + item.replace('./', ''),
        thumbnail: process.env.PUBLIC_URL + "/img/" + item.replace('./', ''),
      });
    });
    return images;
}

function App() {
  const images = importarImagens(require.context('../public/img/', false, /\.(png|jpe?g)$/));
  // console.log(images);

  return (
    <div className="App">
        <ImageGallery items={images} thumbnailPosition="left" />
    </div>
  );
}

export default App;
