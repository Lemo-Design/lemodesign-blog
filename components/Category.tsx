export default function Category({ setSelectedTag, tag, selectedTag }) {
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag(null);
    }
    return setSelectedTag(tag);
  };

  return (
    <div
      key={tag}
      onClick={() => handleTagClick(tag)}
      className={`${
        selectedTag === tag && '!border-white text-white'
      } inline-flex items-center px-3 py-1.5 uppercase border-2  border-warm-gray-500 text-warm-gray-500 rounded cursor-pointer`}
    >
      <span className="font-medium">{tag || 'All'}</span>
    </div>
  );
}
