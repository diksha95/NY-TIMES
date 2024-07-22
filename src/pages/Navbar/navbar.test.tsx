import { render, screen } from '@testing-library/react';
import Navbar from './index';

describe('Navbar', () => {
    test('renders Navbar component', () => {
        render(<Navbar />);
        
        // Check if the heading is rendered
        const headingElement = screen.getByTestId('heading');
        expect(headingElement).toBeInTheDocument();
        
        // Check if the heading text is 'The New York Times'
        expect(headingElement).toHaveTextContent('The New York Times');
    });
});