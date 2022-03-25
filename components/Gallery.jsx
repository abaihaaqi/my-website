import Card from "./Card";
import wavePortal from '../public/design/wave-portal.png'
import todoApp from '../public/design/todo-app.png'
import eCommerce from '../public/design/e-commerce.png'

export default function Gallery({ title }) {
  return (
    <section>
      {title && <h1 className="tracking-widest font-extralight text-center my-4">{title}</h1>}
      <div className='container max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-2 px-2'>
        <div className="flex flex-col gap-2">
          <Card image={wavePortal} height='h-[200px]' />
          <Card image={todoApp} height='h-[250px]' />
          <Card image={eCommerce} height='h-[350px]' />
        </div>
        <div className="flex flex-col gap-2">
          <Card image={todoApp} height='h-[350px]' />
          <Card image={eCommerce} height='h-[100px]' />
          <Card image={wavePortal} height='h-[200px]' />
        </div>
        <div className="flex flex-col gap-2">
          <Card image={eCommerce} height='h-[250px]' />
          <Card image={wavePortal} height='h-[300px]' />
          <Card image={todoApp} height='h-[100px]' />
        </div>
        {/* // TODO: Make this dynamic image */}
        {/* // TODO: Create filler for empty grid */}
      </div>
    </section>
  )
}