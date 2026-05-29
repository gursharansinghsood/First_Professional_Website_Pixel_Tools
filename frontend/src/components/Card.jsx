

const Card = ({children, className, ...props}) => {
  return (
      <div className={`bg-surface border border-primary/30 rounded-2xl p-6 ${className}`} {...props}>{children}</div>
  )
}

export default Card