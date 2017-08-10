/*-----------------QUESTIONS-----------------*/

export const questions = [
  {
    questionId: 1,
    authorId: 1,
    status: 'asked',
    comments: [1, 2, 3, 4, 5, 6],
    answers: [1],
    discussions: [3, 19, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    conversations: [28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    question:
      'MOST RECENT ON MY SHELF Will insulin make my patient gain weight?',
    isHot: true,
    dateAdded: '2017-08-09T14:48:00.000Z'
  },
  {
    questionId: 2,
    authorId: 2,
    status: 'asked',
    comments: [7, 8, 9],
    answers: [4],
    discussions: [85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176, 233], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44, 144], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    question: 'Vegan diet to stop diabetes progress',
    isHot: false,
    dateAdded: '2000-10-05T14:48:00.000Z'
  },
  {
    questionId: 3,
    authorId: 5,
    status: 'asked',
    comments: [16, 17, 18, 19, 20, 21, 22, 23, 24],
    answers: [2],
    discussions: [85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    question: 'SLIGHTLY LESS RECENT my shelf Vegan diet in diabetes treatment?',
    isHot: false,
    dateAdded: '2017-08-09T10:48:00.000Z'
  },
  {
    questionId: 4,
    authorId: 8,
    status: 'asked',
    comments: [10, 11],
    answers: [5],
    discussions: [1, 3, 19, 85, 89, 134, 201, 354], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 4, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    question: 'Another hot question',
    isHot: true,
    dateAdded: '2015-10-05T14:48:00.000Z'
  },
  {
    questionId: 5,
    authorId: 8,
    status: 'asked',
    comments: [12],
    answers: [6],
    discussions: [2, 3, 19, 85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    question: 'Vegan diet to stop diabetes progress',
    isHot: false,
    dateAdded: '2013-10-05T14:48:00.000Z'
  },
  {
    questionId: 6,
    authorId: 8,
    status: 'asked',
    comments: [25, 26],
    answers: [3],
    discussions: [3, 19, 20, 21, 22, 85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 22, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    question: 'THIRD MOST RECENT shelf Vegan diet to stop diabetes progress',
    isHot: false,
    dateAdded: '2017-07-30T14:48:00.000Z'
  },
  {
    questionId: 7,
    authorId: 3,
    status: 'asked',
    comments: [13, 14, 15],
    answers: [7],
    discussions: [3, 4, 19, 85, 89, 134, 201, 556], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    peersInvolved: [1], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INFINITELY EXPAND THE DATA SET
    question:
      'last mr shelf LAST HOT QUESTION Vegan diet to stop diabetes progress',
    isHot: true,
    dateAdded: '1999-10-05T14:48:00.000Z'
  }
];

/*-----------------USERS-----------------*/
export const users = [
  {
    userId: 1,
    title: 'Dr',
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl: 'https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg',
    dateJoined: '2012-04-22T14:48:00.000Z',
    lastLogged: '2017-08-06T17:03:00.000Z',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [28, 40, 108, 212],
    questionsFollowed: [3, 18, 92, 177]
  },
  {
    userId: 2,
    title: 'Dr',
    firstName: 'Tom',
    lastName: 'McBorrough',
    imgUrl:
      'http://www.menshairstyletrends.com/wp-content/uploads/2014/08/Hairstyles-for-Square-Faces-Men-Ryan-Seacrest-Hair.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 3,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 3,
    title: 'Mr',
    firstName: 'John',
    lastName: 'Kavanagh',
    imgUrl:
      'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/01/matt-bomer-square-face.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 1,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 4,
    title: 'Dr',
    firstName: 'Mike',
    lastName: 'Flynn',
    imgUrl:
      'http://machohairstyles.com/wp-content/uploads/2016/06/Urban-Pompadour.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 1,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 5,
    title: 'Dr',
    firstName: 'Sarah',
    lastName: 'Abberton',
    imgUrl:
      'https://s-media-cache-ak0.pinimg.com/originals/72/45/2b/72452b907c61d21363fafdd1c4a452e6.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 3,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 6,
    title: 'Ms',
    firstName: 'Martha',
    lastName: 'Quinsey',
    imgUrl:
      'http://www.coolshorthairstyles.com/wp-content/uploads/2014/09/short-hairstyles-for-square-face-blonde-with-bangs.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 8,
    title: 'Mr',
    firstName: 'Emmanuel',
    lastName: 'Bodongo',
    imgUrl:
      'http://glamyhair.com/wp-content/uploads/2013/12/Perfect-Short-Hairstyle-for-Men-with-Square-Face.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 9,
    title: 'Ms',
    firstName: 'Patricia',
    lastName: 'Abirtonne',
    imgUrl:
      'https://s-media-cache-ak0.pinimg.com/736x/da/e9/ec/dae9ec9566ee9a7a2c661dc40aace77c--rock-on-short-hairstyles-for-women.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 1,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  }
];

/*-----------------COMMENTS-----------------*/
export const comments = [
  {
    commentId: 1,
    authorId: 2,
    questionId: 1
  },
  {
    commentId: 2,
    authorId: 3,
    questionId: 1
  },
  {
    commentId: 3,
    authorId: 4,
    questionId: 1
  },
  {
    commentId: 4,
    authorId: 5,
    questionId: 1
  },
  {
    commentId: 5,
    authorId: 6,
    questionId: 1
  },
  {
    commentId: 6,
    authorId: 7,
    questionId: 1
  },
  {
    commentId: 7,
    authorId: 1,
    questionId: 2
  },
  {
    commentId: 8,
    authorId: 3,
    questionId: 2
  },
  {
    commentId: 9,
    authorId: 5,
    questionId: 2
  },
  {
    commentId: 10,
    authorId: 5,
    questionId: 4
  },
  {
    commentId: 11,
    authorId: 1,
    questionId: 4
  },
  {
    commentId: 12,
    authorId: 2,
    questionId: 5
  },
  {
    commentId: 13,
    authorId: 2,
    questionId: 7
  },
  {
    commentId: 14,
    authorId: 1,
    questionId: 7
  },
  {
    commentId: 15,
    authorId: 4,
    questionId: 7
  },
  {
    commentId: 16,
    authorId: 4,
    questionId: 3
  },
  {
    commentId: 17,
    authorId: 8,
    questionId: 3
  },
  {
    commentId: 18,
    authorId: 6,
    questionId: 3
  },
  {
    commentId: 19,
    authorId: 9,
    questionId: 3
  },
  {
    commentId: 20,
    authorId: 10,
    questionId: 3
  },
  {
    commentId: 21,
    authorId: 11,
    questionId: 3
  },
  {
    commentId: 22,
    authorId: 12,
    questionId: 3
  },
  {
    commentId: 23,
    authorId: 13,
    questionId: 3
  },
  {
    commentId: 24,
    authorId: 14,
    questionId: 3
  },
  {
    commentId: 25,
    authorId: 6,
    questionId: 6
  },
  {
    commentId: 26,
    authorId: 3,
    questionId: 6
  }
];

/*-----------------ANSWERS-----------------*/
export const answers = [
  {
    answerId: 1,
    authorId: 8,
    questionId: 1
  },
  {
    answerId: 2,
    authorId: 3,
    questionId: 3
  },
  {
    answerId: 3,
    authorId: 1,
    questionId: 6
  },
  {
    answerId: 4,
    authorId: 4,
    questionId: 2
  },
  {
    answerId: 5,
    authorId: 2,
    questionId: 4
  },
  {
    answerId: 6,
    authorId: 6,
    questionId: 5
  },
  {
    answerId: 7,
    authorId: 5,
    questionId: 7
  }
];

/*-----------------LOGGED USER-----------------*/
export const loggedUser = {
  userId: 666,
  questionsFollowed: [1, 3, 6, 7]
};
