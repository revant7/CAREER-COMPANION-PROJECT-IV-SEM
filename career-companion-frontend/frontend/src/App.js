import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Footer from './components/Footer';
import Login from './components/Login';
import QuestionnaireForm from './components/QuestionnaireForm';
import FeaturesOverview from './components/FeaturesOverview';
import ExploreCareers from './pages/ExploreCareers';
import ResourcesPage from './pages/Resources';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs("div", { className: "relative min-h-screen", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Home, {}), " ", _jsx(FeaturesOverview, {})] }) }), _jsx(Route, { path: "/register", element: _jsx(QuestionnaireForm, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/explore", element: _jsx(ExploreCareers, {}) }), _jsx(Route, { path: "/resources", element: _jsx(ResourcesPage, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
