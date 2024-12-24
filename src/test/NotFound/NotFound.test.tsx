/**
 * @jest-environment jsdom
 */
import { TextDecoder, TextEncoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });

import * as React from 'react';
import { NotFound } from '@app/NotFound/NotFound';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('NotFound tests', () => {
    test('should render NotFound component', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<NotFound />} />
                </Routes>
            </BrowserRouter>
        );
  
        expect(asFragment()).toMatchSnapshot();
    });

    test('go home', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<NotFound />} />
                </Routes>
            </BrowserRouter>
        );
        userEvent.click(screen.getByText('Take me home'))
      })
});
