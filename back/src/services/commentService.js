const { Comment } = require('../db');

const commentService = {
  addComment: async ({ score, comment }) => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000 + 32400000;
    const timeNow = new Date(Date.now() - timezoneOffset);
    const year = `${timeNow.getFullYear()}`;
    const month = ('0' + `${1 + timeNow.getMonth()}`).slice(-2);
    const date = ('0' + `${timeNow.getDate()}`).slice(-2);
    const hour = ('0' + `${timeNow.getHours()}`).slice(-2);
    const minute = ('0' + `${timeNow.getMinutes()}`).slice(-2);
    const time = year + month + date + hour + minute;

    const newComment = { time, score, comment };
    const iscreated = await Comment.create({ newComment });
    return { status: "ok" };
  },
  getComments: async () => {
    const comments = await Comment.findAll();
    return comments;
  },
};

module.exports = { commentService };
