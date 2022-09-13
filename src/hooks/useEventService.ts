import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  useGetLessonBySlugQuery,
  useGetLessonsQuery,
} from "../graphql/generated";

export const useEventService = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: lessonsQueryResponse } = useGetLessonsQuery();

  const { data: lessonQueryResponse } = useGetLessonBySlugQuery({
    variables: { slug: slug },
  });

  const lessons = lessonsQueryResponse?.lessons ?? null;
  const lesson = lessonQueryResponse?.lesson ?? null;

  return { lessons, lesson };
};
