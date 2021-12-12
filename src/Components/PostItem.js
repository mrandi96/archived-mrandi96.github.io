import React from 'react';
import classes from '../CSS/PostItem.module.css';
import colors from '../CSS/Colors.module.css';
import moment from 'moment';

export function PostItem({ title, content, createdAt, type }) {
  return (
    <div className={`${classes.container} ${colors.surface}`}>
      <h1>{title}</h1>
      <span>{moment(createdAt*1000).format("DD MMMM YYYY")}</span>
      <hr />
      <p>{content}</p>
      {!!type && <span>Category: {type}</span>}
    </div>
  )
}
