import React from 'react';
import moment from 'moment';
import classes from '../CSS/PostItem.module.css';
import colors from '../CSS/Colors.module.css';
import { capitalize } from '../utils/stringManipulator';

export function PostItem({ title, content, createdAt, type }) {
  return (
    <div className={`${classes.container} ${colors.surface}`}>
      <h1>{title}</h1>
      <span>{moment(createdAt*1000).format("dddd, DD MMMM YYYY")}</span>
      <hr />
      <p>{content}</p>
      {!!type && <span>Category: {capitalize(type)}</span>}
    </div>
  )
}
