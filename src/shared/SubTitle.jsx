function Subtitle({ styleClass, children }) {
    return (
      <div className={`text-lg font-medium cursor-default flex justify-between pb-5 md:pb-0 ${styleClass}`}>{children}</div>
    )
  }
  
  export default Subtitle