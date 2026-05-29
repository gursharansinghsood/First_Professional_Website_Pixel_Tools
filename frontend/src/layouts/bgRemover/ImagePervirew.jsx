import React from 'react'
import Card from '../../components/Card'
import { PrimaryButton } from '../../components/Button'
import { MdDelete } from 'react-icons/md'

const ImagePervirew = ({ image, imageName, imageSize, removeImage, bgRemover, isLoading, removeBGImage }) => {
    return (
        <div>
            {image && <>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                    <Card className={"w-full flex items-center gap-2 sm:gap-5 justify-between"}>
                        <img src={image.preview} alt="Preview" className='h-20 w-20 object-contain rounded' />
                        <div className='flex flex-col text-muted tex-xs md:text-lg font-bold truncate w-full'>
                            <p>{imageName}</p>
                            <p className='text-sm'>{(imageSize / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                            className={`text-2xl font-bold text-muted hover:text-primary transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}`}
                            onClick={removeImage}
                            disabled={isLoading}
                        ><MdDelete /></button>
                    </Card>
                    <Card className={"w-full flex flex-col gap-4 justify-center"}>
                        <PrimaryButton
                            className={`w-full ${isLoading || removeBGImage ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}`}
                            onClick={() => bgRemover(image)}
                            disabled={isLoading || removeBGImage}>
                            {isLoading ? 'Processing...' : 'Remove Background'}
                        </PrimaryButton>
                        <p className='text-center text-xs text-muted'>Ready to process</p>
                    </Card>
                </div>
            </>}
        </div>
    )
}

export default ImagePervirew