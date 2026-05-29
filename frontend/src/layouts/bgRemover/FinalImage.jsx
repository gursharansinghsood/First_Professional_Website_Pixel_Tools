import { PrimaryButton, SecondaryButton } from '../../components/Button'

const FinalImage = ({ image, clearData }) => {

    const handleDownload = () => {
        const a = document.createElement("a");
        a.href = image;   // image URL
        a.download = "Pixel-Tools-Without-Background.png"; // file name

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        image && <div className='my-10 flex flex-col gap-2 items-center justify-center '>
            <img src={image}
                alt="Final"
                className='w-30 mx-auto border-2 border-primary rounded-lg bg-[url("/src/assets/pattern.png")] bg-cover bg-center bg-no-repeat'
            />
            <p className='text-center text-muted text-xs'>Your Image is ready to download</p>
            <div className='flex gap-2'>
                <PrimaryButton onClick={handleDownload} className={"text-center font-bold text-xs cursor-pointer"}>
                    Download Image
                </PrimaryButton>
                <SecondaryButton onClick={clearData} className={"text-center font-bold text-xs cursor-pointer"} >Upload Another</SecondaryButton>
            </div>
        </div>
    )
}

export default FinalImage