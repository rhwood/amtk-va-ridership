import * as React from 'react';
import { RichmondBus } from '@app/Corridors/RichmondBus';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Richmond Express Bus tests', () => {
    test('should render Richmond Express Bus component', () => {
        const { asFragment } = render(<RichmondBus />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
