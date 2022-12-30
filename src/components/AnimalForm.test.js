import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AnimalForm from './AnimalForm';
import userEvent from '@testing-library/user-event'

test ("renders without error",() => {
    render (<AnimalForm/>)
})


test("When user fills all fields and submits, species appear on the list", async () => {
    // since we are going to be doing some button clicking and waiting for stuff to fill in,
    // this is going to be stuffs that we are going to be doing asynchronously
    render (<AnimalForm/>)                                                      // Arrange
    const species = "feline";

    const speciesInput = screen.getByLabelText(/species:/i);                    // Act
    userEvent.type(speciesInput, species);
    
    const ageInput = screen.getByLabelText(/age/i);
    userEvent.type(ageInput, '9');

    const notesInput = screen.getByLabelText(/notes:/i)
    userEvent.type(notesInput, 'notes that I want to put in');

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    await waitFor(() => {                                                      // Assert
        const speciesFeedback = screen.queryByText(species);
        expect(speciesFeedback).toBeInTheDocument();
    })
})