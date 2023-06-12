import { Routes, Route } from "react-router-dom";

import { HomePage, Stock } from "../pages";

export const AllRoutes = () => {
    return (
      <div className="dark:bg-slate-800 min-h-screen">
        <Routes >
            <Route path="/" element={ <HomePage/>} />
            <Route path="/Stock" element={ <Stock/>} />
        </Routes>
      </div>
    )
  }