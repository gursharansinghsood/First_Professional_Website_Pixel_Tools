export const PrimaryButton = ({className, children, ...props}) => {
  return (
    <button className={`${className} bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl transition-all `} {...props}>{children}</button>
  )
}   

export const SecondaryButton = ({className, children, ...props}) => {
  return (
    <button className={`${className} border border-primary hover:bg-primary/20 text-primary px-6 py-3 rounded-xl transition-all `} {...props}>{children}</button>
  )
}   
  