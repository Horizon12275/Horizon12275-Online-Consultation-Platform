import { Col, Flex, Popover, Row } from "antd";
const emojiList = [
  { id: 1, emoji: "😀" },
  { id: 2, emoji: "😂" },
  { id: 3, emoji: "🥺" },
  { id: 4, emoji: "🤩" },
  { id: 5, emoji: "👿" },
  { id: 6, emoji: "😛" },
  { id: 7, emoji: "😞" },
  { id: 8, emoji: "😑" },
  { id: 9, emoji: "😴" },
  { id: 10, emoji: "😭" },
  { id: 11, emoji: "🤔" },
  { id: 12, emoji: "🤗" },
  { id: 13, emoji: "😏" },
  { id: 14, emoji: "🙏🏼" },
  { id: 15, emoji: "💖" },
  { id: 16, emoji: "🥂" },
  { id: 17, emoji: "😸" },
  { id: 18, emoji: "👀" },
  { id: 19, emoji: "✋" },
  { id: 20, emoji: "👎" },
  { id: 21, emoji: "👏" },
  { id: 22, emoji: "👩🏼‍💻" },
  { id: 23, emoji: "📁" },
  { id: 24, emoji: "🏳️‍🌈" },
];
const EmojiDropdown = ({ value, setValue }) => {
  return (
    <Popover
      className="shrink-0 w-6 aspect-square cursor-pointer"
      placement="top"
      trigger={["click"]}
      content={
        <Flex vertical>
          <Row gutter={[2, 2]}>
            {emojiList.map((item) => (
              <Col
                span={4}
                key={item.id}
                onClick={() => setValue(value + item.emoji)}
                className="cursor-pointer"
              >
                <span>{item.emoji}</span>
              </Col>
            ))}
          </Row>
        </Flex>
      }
    >
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a2993e7efa2bbf0fbfc53b88b3a8e573536a665785952044c3c13053ef83f3?apiKey=9e661a5e0ad74c878ca984d592b3752c&" />
    </Popover>
  );
};

export default EmojiDropdown;
