import * as React from 'react';
import { HamptonRoadsBus } from '@app/Corridors/HamptonRoadsBus';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Hampton Roads Express Bus tests', () => {
    test('should render Hampton Roads Express Bus component', () => {
        const { asFragment } = render(<HamptonRoadsBus />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
