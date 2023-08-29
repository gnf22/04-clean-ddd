import { expect, test } from 'vitest'
import { Slug } from './slug'

test('it shoud be able to create from text', () => {
  const slug = Slug.createFromText('Example question title');

  expect(slug.value).toEqual('example-question-title');
})