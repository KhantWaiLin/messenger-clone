import DeskTopSideBar from "./DeskTopSideBar";

async function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DeskTopSideBar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default SideBar;
