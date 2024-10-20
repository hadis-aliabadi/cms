export const savePosts = posts => {
  localStorage.setItem('posts', JSON.stringify(posts));
};
export const loadPosts = () => {
  const savedPosts = localStorage.getItem('posts');
  return savedPosts ? JSON.parse(savedPosts) : [];
};