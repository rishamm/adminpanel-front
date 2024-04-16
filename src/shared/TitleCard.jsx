import Subtitle from "./SubTitle"

function TitleCard({ title, children, topMargin, TopSideButtons, target = "",styleClass }) {
  return (
    <div className={"card relative w-full p-6 bg-base-100 bg-white rounded-lg cursor-pointer" + (topMargin || "mt-6")} id={target} >
      {/* Title for Card */}
      <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title}
        {/* Top side button, show only if present */}
        {TopSideButtons && <div className={`inline-block float-right  ${styleClass}`}>{TopSideButtons}</div>}
      </Subtitle>

      {/** Card Body */}
      <div className='w-full pb-1 bg-base-100'>
        {children}
      </div>
    </div>
  )
}


export default TitleCard