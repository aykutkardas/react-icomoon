export default (selection) => {
  const icons = {
    path: {},
    viewBox: {}
  };

  if (!selection || !selection.icons) return icons;

  selection.icons.forEach(icon => {
    const [iconName] = icon.tags;
    icons.path[iconName] = icon.paths;
    icons.viewBox[iconName] = `0 0 ${icon.width || '1024'} 1024`;
  });

  return icons;
}