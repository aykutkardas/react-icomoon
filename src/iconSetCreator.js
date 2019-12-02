export default (selection) => {
  const icons = {
    path: {},
    viewBox: {}
  };

  if (!selection || !selection.icons) return icons;

  selection.icons.forEach(item => {
    const { name } = item.properties;
    icons.path[name] = item.icon.paths;
    icons.viewBox[name] = `0 0 ${item.icon.width || '1024'} 1024`;
  });

  return icons;
}