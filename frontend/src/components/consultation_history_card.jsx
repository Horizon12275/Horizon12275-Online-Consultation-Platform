export default function ConsultationHistoryCard({ expert }) {
  return (
    <main className="flex flex-col justify-center max-w-[352px] mt-3">
      <article className="flex flex-col justify-center w-full rounded-xl">
        <section className="flex gap-4 justify-center p-4 bg-blue-50 rounded-xl border border-sky-200 border-solid">
          <div className="flex flex-col justify-center my-auto text-base font-medium tracking-normal leading-6 text-center text-blue-50 whitespace-nowrap">
            <div className="justify-center items-center px-4 w-10 h-10 bg-blue-500 rounded-full">
              {expert.username}
            </div>
          </div>
          <div className="flex flex-col flex-1 text-zinc-900">
            <h2 className="text-base font-medium tracking-normal leading-6">
              Topic: Data Structure
            </h2>
            <time className="mt-1 text-sm tracking-wide leading-5">
              Date: 2.2.2024
            </time>
          </div>
        </section>
      </article>
    </main>
  );
}
