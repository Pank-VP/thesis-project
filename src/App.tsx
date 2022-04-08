import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import EurasianAgroexpress from './pages/EurasianAgroexpress/EurasianAgroexpress';
import Home from './pages/Home/Home';
import Magistral from './pages/Magistral/Magistral';
import NotFound from './pages/NotFound/NotFound';
import NorthSouth from './pages/NorthSouth/NorthSouth';
import Terminals from './pages/Terminals/Terminals';
import { useDispatch } from 'react-redux';
import { getDataHome } from './store/Home/ActionCreator';
import { getDataTerminalsCreator } from './store/Terminals/ActionCreator';
import { getDataMagistralCreator } from './store/Magistral/ActionCreators';
import { getDataNorthSouthCreator } from './store/NorthSouth/ActionCreators';
import { getDataEurasianAgroexpressCreator } from './store/EurasianAgroexpress/ActionCreator';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataHome())
  }, []);

  useEffect(() => {
    dispatch(getDataTerminalsCreator())
  }, []);

  useEffect(() => {
    dispatch(getDataMagistralCreator())
  }, []);

  useEffect(() => {
    dispatch(getDataNorthSouthCreator())
  }, []);

  useEffect(() => {
    dispatch(getDataEurasianAgroexpressCreator())
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terminals" element={<Terminals />} />
      <Route path="/magistral" element={<Magistral />} />
      <Route path="/north-south" element={<NorthSouth />} />
      <Route path="/eurasian-agroexpress" element={<EurasianAgroexpress />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
