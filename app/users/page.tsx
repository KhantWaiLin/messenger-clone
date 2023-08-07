import EmptyState from "../components/EmptyState";
import SideBar from "../components/sidebar/SideBar";

const Users = () => {
  return (
    <SideBar>
      <div className="hidden lg:block lg:pl-80 h-full">
        <EmptyState />
      </div>
    </SideBar>
  );
};

export default Users;
