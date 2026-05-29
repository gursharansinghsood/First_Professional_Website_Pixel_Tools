import React, { useState } from 'react'
import UploadZone from '../layouts/UploadZone'

import ImagePervirew from '../layouts/bgRemover/ImagePervirew'
import FinalImage from '../layouts/bgRemover/FinalImage'
import { removeBackground } from "@imgly/background-removal";
import Loading from '../components/Loading';

const BGRemover = () => {
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState('')
  const [imageSize, setImageSize] = useState('')
  const [removedBGImage, setRemovedBGImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const removeImage = () => {
    setImage(null)
    setImageName('')
    setImageSize('')
    setRemovedBGImage(null)
  }

  const bgRemover = async (image) => {
    try {
      setIsLoading(true);

      const resultBlob = await removeBackground(image);
      const url = URL.createObjectURL(resultBlob);

      setRemovedBGImage(url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='max-w-6xl w-full mx-auto overflow-x-hidden p-10 min-h-screen flex flex-col items-center justify-center'>
      <p className='text-4xl font-bold text-center mb-2 text-text'>Remove Background</p>
      <p className='text-center text-muted mb-5'>Upload an image and let our AI remove the background for you</p>

      <UploadZone image={image} setImage={setImage} setImageName={setImageName} setImageSize={setImageSize} isLoading={isLoading} />

      <ImagePervirew image={image} imageName={imageName} imageSize={imageSize} removeImage={removeImage} bgRemover={bgRemover} isLoading={isLoading} removeBGImage={removedBGImage} />


      <FinalImage image={removedBGImage} clearData={removeImage} />
      {isLoading && <Loading />}
    </div>

  )
}

export default BGRemover