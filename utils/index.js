import axios from 'axios';
import * as LocalData from './Endpoint';

export const getArticles = async () => {
  try {
    const url = process.env.REACT_APP_ENDPOINT_URL || '';
    if (!url) return LocalData.articles;
    const response = await axios.get(url);
    const filteredResults = response.data.articles.filter(
      (element) => element.subtype === '7',
    );
    const sortedTags = sortTags(filteredResults);
    return { results: filteredResults, tags: sortedTags };
  } catch (error) {
    throw error;
  }
};

const sortTags = (tags) => {
  let tagsCollection = [];
  const counter = {};
  // Iterate through the Tags and merge all the objects in one
  tags.forEach((element) => {
    tagsCollection = [
      ...merge(element.taxonomy.tags, tagsCollection, 'slug', counter),
    ];
  });

  // Sort the elements in DESC order | Example ["frutas-tid67217", [4, "Frutas"]]
  const entries = Object.entries(counter);
  const sorted = entries.sort((a, b) => b[1][0] - a[1][0]);

  // Once we sorted the elements we transform them into an Object and we pick the top 10
  const top10 = sorted.map((item) => [item[0], item[1][1]]).slice(0, 10);
  return top10;
};

/**
 * - Merge A & B values
 * - Remove duplicates
 * - Increase the counter of frequency
 *
 * @param {*} a Array of values
 * @param {*} b Variable we are going to use to preserve
 * @param {*} prop Field we want to use as "ID"
 * @param {*} counter Field that let us count the frequency
 */
function merge(a, b, prop, counter) {
  const reduced = a.filter(
    (aItem) => !b.find((bItem) => {
      // Compare the elements given the prop
      if (aItem[prop] === bItem[prop]) {
        // If if the first duplicate we add a 0 otherwise we increase in 1 the previus value
        counter[bItem[prop]] = [
          (counter[bItem[prop]] ? counter[bItem[prop]][0] : 1) + 1,
          bItem.text,
        ];
      }
      return aItem[prop] === bItem[prop];
    }),
  );
  return reduced.concat(b);
}
