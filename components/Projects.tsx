const PROJECTS = [
  { id: 1, title: 'Фигня 1', link: '#' },
  { id: 2, title: 'Фигня 2', link: '#' },
  { id: 3, title: 'Фигня 3', link: '#' },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-black text-white"
    >
      <h2 className="text-center text-3xl font-bold mb-12">Мои проекты</h2>

      <div className="grid gap-6 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all"
          >
            <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
            <a
              href={p.link}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Посмотреть →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
