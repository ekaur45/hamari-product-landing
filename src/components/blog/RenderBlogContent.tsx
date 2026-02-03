export default function RenderBlogContent({ blocks }: { blocks: any[] }) {
    return blocks.map((block: any, index: number) => {
      switch (block.type) {
        case "paragraph":
          return <p className="text-base text-gray-600 mb-4" key={index}>{block.children.map(c => c.text).join("")}</p>;
        case "heading":
          return <h2 className={`text-2xl font-bold mb-4 h${block.level}`} key={index}>{block.children.map(c => c.text).join("")}</h2>;
        case "list":
          return <ul className="list-disc list-inside mb-4" key={index}>{block.children.map((item: any, i: number) => <li key={i}>{item.text}</li>)}</ul>;
        default:
          return null;
      }
    });
  }

