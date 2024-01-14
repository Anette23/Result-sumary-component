import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const Card = () => {
  return (
    <section className="card max-w-96 md:max-w-screen-lg md:rounded-3xl flex flex-col md:flex-row md:gap-12">
        <LeftSide />
        <RightSide />
    </section>
  )
}

export default Card