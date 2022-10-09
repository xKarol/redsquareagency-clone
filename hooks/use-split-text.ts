import { useEffect, useState } from "react";

type Props = {
  text: string;
  chunks?: number;
};

type ChunkType = string[][];

const useSplitText = ({ text, chunks = 3 }: Props) => {
  const [textChunks, setTextChunks] = useState<ChunkType>([]);

  useEffect(() => {
    const textArray = text.split(" ");
    const array = textArray.reduce((resultArray: ChunkType, item, index) => {
      const chunkIndex = Math.floor(index / chunks);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);
    setTextChunks(array);
  }, [text, chunks]);

  return { textChunks };
};

export default useSplitText;
