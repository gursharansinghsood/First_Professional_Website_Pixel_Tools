
const Loading = () => {
  return (
      <div className='fixed inset-0 flex justify-center items-center z-100 bg-primary/10 backdrop-blur-lg flex-col'>
          <div className='w-12 h-12 border-8 border-primary border-b-muted/10 rounded-full animate-spin'></div>
          <p className='ml-4 text-primary font-bold text-md'>Processing...</p>
    </div>
  )
}

export default Loading