import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import DividerVertical from '@/components/ui/DividerVertical';

const points = [
  {
    title: 'MVP & Прототипирование',
    text: 'Специализируюсь на создании архитектуры и быстрых прототипов. Моя задача — в кратчайшие сроки превратить концепт в функциональный продукт для тестов',
  },
  {
    title: 'Сверхбыстрый Adaptive',
    text: 'Если для реализации идеи требуется незнакомый стек, я осваиваю его в процессе работы без потери темпа и качества реализации',
  },
  {
    title: 'R&D Инженер',
    text: 'Эффективно работаю в условиях неопределенности, когда нужно быстро проверить гипотезу или собрать сложный технический концепт',
  },
  {
    title: 'Актуальные практики',
    text: 'Стремлюсь привнести в проект свежий взгляд и современные технологии, закладывая фундамент для будущего масштабирования',
  },
] as const;

export default function Info() {
  return (
    <SectionContainer id="info">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="03" label="Обо мне" />

        <div className="grid gap-16 md:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight">
              Фуллстек разработчик с фокусом на{' '}
              <span className="text-blue-500">результат</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                В своей практике я фокусируюсь на этапе запуска и активного
                развития продукта. Как фуллстек разработчик, я создаю рабочие
                решения, которые можно тестировать и показывать пользователям
                уже на ранних стадиях
              </p>
              <p>
                Для меня разработка — это прежде всего инструмент для воплощения
                новых идей. Я постоянно нахожусь в поиске амбициозных задач и
                новых инструментов, помогая абстрактным концептам обретать форму
              </p>
            </div>
          </div>

          <DividerVertical />

          <div className="flex flex-col justify-center space-y-10">
            {points.map((point, index) => (
              <div key={point.title} className="group">
                <h3 className="mb-2 flex items-center gap-2 font-medium text-blue-500">
                  <span className="font-mono text-[10px] opacity-50">
                    [{index + 1}]
                  </span>
                  {point.title}
                </h3>
                <p className="border-l border-white/5 pl-4 text-sm leading-relaxed text-gray-300 transition-colors group-hover:border-blue-500/50">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
          <p className="italic text-gray-400">
            &quot;Мой подход строится на гибкости и поиске наиболее эффективных
            путей реализации идеи&quot;
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
