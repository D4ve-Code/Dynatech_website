import React, { useState } from "react"

const ImageGallery = () => {
  const [selectedContent, setSelectedContent] = useState(null)

  const handleImageClick = (imageName, text) => {
    const imagePath = `src/assets/images/${imageName}`
    const content = {
      image: imagePath,
      text: text,
    }
    setSelectedContent(content)
  }

  return (
    <div>
      <ul>
        <li onClick={() => handleImageClick("image1.jpg", "Text for Point 1")}>
          Point 1
        </li>
        <li onClick={() => handleImageClick("image2.jpg", "Text for Point 2")}>
          Point 2
        </li>
        <li onClick={() => handleImageClick("image3.jpg", "Text for Point 3")}>
          Point 3
        </li>
      </ul>
      {selectedContent && (
        <div>
          <img src={selectedContent.image} alt="Selected" />
          <p>{selectedContent.text}</p>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
