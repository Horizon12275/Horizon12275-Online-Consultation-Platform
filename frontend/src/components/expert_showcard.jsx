import React from 'react';
import { Card, Badge } from 'antd';
import Link from 'antd/es/typography/Link';

const { Meta } = Card;


export default function ExpertShowCard({expert}) {
  return (
      <Link href={`/detail/${expert.id}`}>
          <Card
              hoverable
              key={book.id}
              cover={
                  <img alt="Book Cover"
                      src={book.image}
                      style={{
                          objectFit: 'cover',
                      }} />
              }
          >
              <Meta
                  title="23213"
                  description="3123123"
              />
          </Card>
      </Link>
  )
}
