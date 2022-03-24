import Placeholder from "./Placeholder";

export default function Gallery({ title }) {
  return (
    <section>
      {title && <h1 className="tracking-widest font-extralight text-center">{title}</h1>}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2 px-2 md:container md:max-w-5xl md:px-0'>
        <div className="flex flex-col gap-2">
          {/* // TODO: Make this dynamic image */}
          <Placeholder height={600} />
          <Placeholder height={400} />
          <Placeholder height={500} />
        </div>
        <div className="flex flex-col gap-2">
          <Placeholder height={500} />
          <Placeholder height={300} />
          <Placeholder height={700} />
        </div>
        <div className="hidden md:flex flex-col gap-2">
          <Placeholder height={500} />
          <Placeholder height={700} />
          <Placeholder height={300} />
        </div>
        {/* // TODO: Create filler for empty grid */}
      </div>
    </section>
  )
}