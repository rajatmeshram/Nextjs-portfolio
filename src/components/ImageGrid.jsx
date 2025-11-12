import Image from "next/image";
const imageStyle = {
  border: '1px solid #fff',
}
 
export function ImageGrid({ title, description, image, btn_text, btn_url }) {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      {Image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      {btn_url && (
        <a
          href={btn_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          {btn_text || "View Project"}
        </a>
      )}
    </div>
  );
}