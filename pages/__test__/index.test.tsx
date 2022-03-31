import React,{useState} from "react";
import  ReactDOM  from "react-dom";
import Head from "next/head";
import Home from "..";
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

  
test('render without crash',(done) => {
    const {container,getByText} = render(<Home/>);
    expect(container).toContain('<Head></Head>')
    


})