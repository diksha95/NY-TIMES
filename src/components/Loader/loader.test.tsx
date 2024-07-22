import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader', () => {
    test('renders Loader component and is hidden by default', () => {
        render(<Loader />);
        
        // Check if the loader is rendered
        const loaderElement = screen.getByTestId('api-loader');
        expect(loaderElement).toBeInTheDocument();
        
        // Check if the loader is hidden by default
        expect(loaderElement).toHaveStyle('display: none');
    });
});
