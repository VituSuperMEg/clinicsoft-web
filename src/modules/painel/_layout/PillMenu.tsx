import { PillContainter } from "./styles";

type Page = {
  page: string;
  menu: string;
};
interface IPillMenu {
  pages: Page[];
  onNavigatePage: (page: string) => void;
}
export function PillMenu({ pages, onNavigatePage }: IPillMenu) {
  console.log(pages);
  return (
    <PillContainter>
      <button onClick={() => onNavigatePage("dashboard")}>Dashboard</button>
      {pages.map((page) => (
        <button key={page.page} onClick={() => onNavigatePage(page.page, page.menu)}>
          {page.page}
        </button>
      ))}
    </PillContainter>
  );
}
