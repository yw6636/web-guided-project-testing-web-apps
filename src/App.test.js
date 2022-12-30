import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App';

test("renders without errors", () => {
    render (<App />)
})

test ("When app mounts, add new animal header exists on the screen", () => {
    render (<App />);                                                     // arrange
    const header = screen.getByText("Add New Animal");                    // act
    expect (header).toBeInTheDocument();                                  // assert
    expect (header).toHaveTextContent(/add new animal/i);                 // i means case-insensitivity
})