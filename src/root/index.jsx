import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from './style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import { navbar } from '../utils/navbar';

const Root = () => {
  return(
      <Container>
        <BrowserRouter>
            {/* <Navbar/> */}
            <Routes>
              <Route element={<Navbar/>}>
                {
                  navbar.map(({path, id, Element})=> (
                    <Route key={id} path={path} element={<Element/>}/>
                  ))
                }
              </Route>
            </Routes>
        </BrowserRouter>
     </Container>
  )
};

export default Root;
