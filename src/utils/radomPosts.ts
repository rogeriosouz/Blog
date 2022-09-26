import { AllPostsType } from '../types/types';

function randomList(min: number, max: number) {
  let erro = false;
  let list: number[] = [];
  let number1 = Math.floor(Math.random() * (max - min)) + min;
  let number2 = Math.floor(Math.random() * (max - min)) + min;
  let number3 = Math.floor(Math.random() * (max - min)) + min;
  let number4 = Math.floor(Math.random() * (max - min)) + min;

  while (!erro) {
    if (number1 === number2 || number1 === number3 || number3 === number2) {
      number1 = Math.floor(Math.random() * (max - min)) + min;
      number2 = Math.floor(Math.random() * (max - min)) + min;
      number3 = Math.floor(Math.random() * (max - min)) + min;
      number4 = Math.floor(Math.random() * (max - min)) + min;
    } else {
      list.push(number1);
      list.push(number2);
      list.push(number3);
      list.push(number4);
      erro = true;
      return list;
    }
  }
}

export function radomPosts(posts: AllPostsType) {
  if (posts) {
    // const lisRandom = randomList(0, posts.posts.length) as number[];

    return [0, 1, 2, 3];
  }
}
