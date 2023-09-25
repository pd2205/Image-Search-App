import searchImages from './api'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import { useState } from 'react'

function App() {

  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }

  return(
    <div>
      <SearchBar 
        onSubmit={handleSubmit}
      />
      <ImageList 
        imagesList={images}
      />
    </div>
  )
}

export default App