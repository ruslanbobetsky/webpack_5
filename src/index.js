import { Post } from './Post';
import json from './assets/json';
import './styles/styles.css';

const post = new Post('Webpack post title');
console.log('Post to string: ' + post.toString());
console.log('Post to json file: ' + json);

