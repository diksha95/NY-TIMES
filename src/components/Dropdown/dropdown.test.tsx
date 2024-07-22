import { render, fireEvent } from '@testing-library/react';
import DropdownComponent from './index';

describe('DropdownComponent', () => {
    test('renders DropdownComponent component and selects an option', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
        const setSelectedOption = jest.fn();
        const { getByRole } = render(<DropdownComponent options={options} selectedOption={options[0]} setSelectedOption={setSelectedOption} />);
        
        // Check if the dropdown is rendered
        const dropdown = getByRole('combobox');
        expect(dropdown).toBeInTheDocument();
        
        // Select an option and check if setSelectedOption is called with the right argument
        fireEvent.change(dropdown, { target: { value: options[1].value } });
        expect(setSelectedOption).toHaveBeenCalledWith(options[1]);
    });
});