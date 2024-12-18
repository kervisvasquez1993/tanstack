import { createBrowserRouter, Navigate } from "react-router-dom";
import { GitApp } from "../App";
import { ListView } from "../issues/views/ListView";
import { IssueView } from "../issues/views/IssueView";

export const router = createBrowserRouter([
  {
    path: "/issues",
    element: <GitApp />,
    children: [
      { path: "list", element: <ListView /> },
      { path: "issue/:id", element: <IssueView /> },
      { path: "*", element: <Navigate to="list" /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="issues/list" />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
