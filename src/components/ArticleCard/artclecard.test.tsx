import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticleCard from './index';

const mockHandleArticle = jest.fn();

const mockArticle = {
  uri: 'test-uri',
  url: 'test-url',
  id: 1,
  asset_id: 1,
  source: 'test-source',
  published_date: '2022-01-01',
  updated: '2022-01-02',
  section: 'test-section',
  subsection: 'test-subsection',
  nytdsection: 'test-nytdsection',
  adx_keywords: 'test-keywords',
  column: null,
  byline: 'test-byline',
  type: 'test-type',
  title: 'test-title',
  abstract: 'test-abstract',
  des_facet: ['test-des_facet'],
  org_facet: ['test-org_facet'],
  per_facet: ['test-per_facet'],
  geo_facet: ['test-geo_facet'],
  media: [{
    type: 'test-type',
    subtype: 'test-subtype',
    caption: 'test-caption',
    copyright: 'test-copyright',
    approved_for_syndication: 1,
    'media-metadata': [{
      url: 'test-url',
      format: 'test-format',
      height: 100,
      width: 100,
    }],
  }],
  eta_id: 1,
};

test('renders ArticleCard component', () => {
  render(<ArticleCard popularArticles={[mockArticle]} handleArticle={mockHandleArticle} />);

  // Check if the article title is present
  expect(screen.getByText('test-title')).toBeInTheDocument();

  // Check if the article abstract is present
  expect(screen.getByText('test-abstract')).toBeInTheDocument();

  // Check if the publish date is present
  expect(screen.getByText('Publish Date :-  01 January 2022')).toBeInTheDocument();
});

test('handles article click', () => {
  render(<ArticleCard popularArticles={[mockArticle]} handleArticle={mockHandleArticle} />);

  // Simulate a click on the article
  userEvent.click(screen.getByText('test-title'));

  // Check if the handleArticle function was called
  expect(mockHandleArticle).toHaveBeenCalledWith(mockArticle);
});
