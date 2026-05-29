import { useDropzone } from 'react-dropzone'
import { PrimaryButton } from '../components/Button'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const UploadZone = ({ image, setImage, setImageName, setImageSize }) => {


    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0]

        file.preview = URL.createObjectURL(file)
        setImage(file)
        setImageName(file.name)
        setImageSize(file.size)
    }
    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        onDrop,
        onDropRejected: (rejectedFiles) => {
            const error = rejectedFiles[0]?.errors[0]
            toast.error(error.message)
        },
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
        },
        maxFiles: 1,
        maxSize: 1024 * 1024 * 10,
    })

    useEffect(() => {

        return () => {

            if (image?.preview) {
                URL.revokeObjectURL(image.preview)
            }

        }

    }, [image])



    return (
        <>
            {
                !image &&
                (<div {...getRootProps()} className="border-2 border-dashed border-primary/50 bg-surface rounded-lg p-4 text-center cursor-pointer flex-col flex gap-2 items-center">
                    <FaCloudUploadAlt size={48} className='text-primary' />
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <>
                            <p className='text-muted font-medium text-md'>Drag and drop some files here, or click to select files</p>
                        </>
                    )}
                    <PrimaryButton className={'text-md font-bold cursor-pointer'}>
                        Choose Image
                    </PrimaryButton>
                    <p className='text-muted text-sm font-medium'>JPG, PNG up to 10MB</p>
                </div>)
            }
        </>
    )
}

export default UploadZone