import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "components/EventBoard/EventBoard"
import upcomingEvents from "../upcoming-events.json"


export const App = () => {
  return (
    // якщо нам не потрібна обгортка, то можемо використати фрагменти (пусті теги)
    <>  
    <PageTitle text="24th Core Worlds Coalition Conference" />
    {/* дані в компонент завжди передаються ззовні */}
    {/* ми імпортуємо дані не в файлі, де оголошений компонент, а там де цей компонент рендериться */}
    {/* і пропсом ці дані передаємо в компонент */}
    <EventBoard events={upcomingEvents} />
  </>
  )

}
  