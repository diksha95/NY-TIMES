import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import ArticleDetail from './index';

describe('ArticleDetail', () => {
    test('renders ArticleDetail component', () => {
        const initialState = {
            articleDetail: {
                media: [{ "media-metadata": [{ url: "test-url" }] }],
                title: "Test Title",
                abstract: "Test Abstract",
                published_date: "2024-07-22"
            },
            popularArticlesLength: 10,
            popularArticlesDays: 7
        };

        window.history.pushState(initialState, '', '/article-detail');

        render(
            <MemoryRouter>
                <ArticleDetail />
            </MemoryRouter>
        );
        
        // Check if the title is rendered
        const titleElement = screen.getByText('Test Title');
        expect(titleElement).toBeInTheDocument();
        
        // Check if the abstract is rendered
        const abstractElement = screen.getByText('Test Abstract');
        expect(abstractElement).toBeInTheDocument();
        
        // Check if the published date is rendered
        const dateElement = screen.getByText('Publish Date :-  22 July 2024');
        expect(dateElement).toBeInTheDocument();
    });
});
