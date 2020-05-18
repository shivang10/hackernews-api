import React, {useEffect, useState} from 'react';
import {getStoryIds, getStory} from '../services/hnApi'
import {Story} from '../components/Story';


export const StoriesContainer = () => {

  const [storyIds, setStoryIds] = useState([]);
  
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
    getStory(23220847).then(
        data => console.log(data)
      )
  }, []);

  // when the component mounts, do this.... [storyidupdate (true/false)] in useeffect
  return storyIds.map(storyId => (
      <Story key={storyId} storyId={storyId} />
  ));
}