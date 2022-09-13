import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useEventService } from "../hooks/useEventService";

export const Event = () => {
  const { lessons, lesson } = useEventService();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {lesson ? <Video lesson={lesson} /> : <div className="flex-1" />}
        {lessons && <Sidebar lessons={lessons} />}
      </main>
    </div>
  );
};
