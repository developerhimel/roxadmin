import React from "react";
import { useLocation } from "react-router";
import Sidebar from "../../components/Sidebar";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ViewPost() {
  let query = useQuery();
  return (
    <div>
      <Sidebar active={query.get("id")} />
    </div>
  );
}

export default ViewPost;
