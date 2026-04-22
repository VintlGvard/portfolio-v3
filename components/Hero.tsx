export default function Hero(): React.JSX.Element {
  return (
    <section
      id="hero"
      className="flex h-screen flex-col items-center justify-center bg-black px-4 text-center text-white"
    >
      <h2 className="text-xl font-medium text-gray-400 sm:text-2xl">
        Привет, я Виталий!
      </h2>

      <h1 className="my-4 text-4xl font-bold tracking-tight sm:text-6xl">
        Full Stack Developer
      </h1>

      <div className="max-w-xl space-y-2 text-gray-400 sm:text-lg">
        <p>
          Обеспечиваю полный цикл разработки: от интерфейсов (Frontend) до
          архитектуры сервера (Backend)
        </p>
        <p>
          Специализируюсь на масштабируемых и высоконагруженных веб-системах
        </p>
      </div>
    </section>
  );
}
