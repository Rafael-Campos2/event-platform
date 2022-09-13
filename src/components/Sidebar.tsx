import { JSXElementConstructor } from "react";
import { GetLessonsQuery, Lesson as LessonType } from "../graphql/generated";
import { Lesson } from "./Lesson";

type SidebarProps = Pick<GetLessonsQuery, "lessons">;

export const Sidebar: JSXElementConstructor<SidebarProps> = ({ lessons }) => {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            lessonType={lesson.lessonType}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
};
