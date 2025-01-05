import fetchMock from 'jest-fetch-mock';
import { render, screen } from '@testing-library/react';
import ClassMainComponent from './ClassMainComponent'; // Adjust the path as necessary

describe('ClassMainComponent', () => {
    beforeEach(() => {
        fetchMock.resetMocks(); // Reset fetch mocks before each test
    });

    it('renders the component and displays the initial count', async () => {
        const mockUserListResponse = JSON.stringify([/* your mock data */]);
        fetchMock.mockResponseOnce(mockUserListResponse);

        render(<ClassMainComponent />);

        expect(await screen.findByText('Count: 1')).toBeInTheDocument(); // Adjust for your initial count
    });
});
