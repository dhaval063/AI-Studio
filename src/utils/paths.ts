export const getBasePath = (): string => {
  try {
    const path = window.location.pathname;
    
    const knownPages = ['home', 'products', 'manufacturing', 'sustainability', 'about', 'oem', 'privatelabel', 'faq', 'blog', 'certificates', 'contact'];
    let base = path;
    
    // Strip index.html if present
    if (base.endsWith('/index.html')) {
      base = base.slice(0, -11);
    }
    
    // Strip trailing slash
    if (base.endsWith('/')) {
      base = base.slice(0, -1);
    }
    
    // Strip known pages
    for (const page of knownPages) {
      if (base.endsWith(`/${page}`)) {
        base = base.slice(0, -(page.length + 1));
      }
    }
    
    if (base.includes('/products/')) {
      const idx = base.indexOf('/products/');
      base = base.substring(0, idx);
    } else if (base.endsWith('/products')) {
      base = base.slice(0, -9);
    }
    
    return base || '';
  } catch (e) {
    return '';
  }
};

export const resolveImagePath = (src: string): string => {
  if (!src) return '';
  if (src.startsWith('http') || src.startsWith('data:') || src.startsWith('blob:')) {
    return src;
  }
  const base = getBasePath();
  const cleanSrc = src.startsWith('/') ? src : '/' + src;
  return base + cleanSrc;
};
