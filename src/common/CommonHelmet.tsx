import { Helmet, useRouteMeta } from 'dumi';
import { useMemo } from 'react';

const CommonHelmet = () => {
  const meta = useRouteMeta();

  const [title, description] = useMemo(() => {
    const helmetTitle = `${meta.frontmatter.subtitle || ''} ${
      meta.frontmatter?.title
    } - Dumi Theme AntD`;
    const helmetDescription = meta.frontmatter.description;
    return [helmetTitle, helmetDescription];
  }, [meta]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default CommonHelmet;
