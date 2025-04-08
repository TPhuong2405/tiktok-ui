// Layout
import { HeaderOnly } from "src/components/Layout";



import Home from "src/pages/Home";
import Following from "src/pages/Following";
import Profile from "src/pages/Profile";
import Upload from "src/pages/Upload";
import Search from "src/pages/Search";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
