import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default function CommentBox() {
  return (
      <>
          <TextArea rows={4} placeholder="写下你的评价..." style={{}}/>
      </>
  )
}
