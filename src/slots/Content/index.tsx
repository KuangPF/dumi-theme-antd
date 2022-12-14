import { CalendarOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Affix, Anchor, Col, Space, Typography } from 'antd';
import classNames from 'classnames';
import DayJS from 'dayjs';
import { useRouteMeta } from 'dumi';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';
import useSiteToken from '../../hooks/useSiteToken';
import Footer from '../Footer';

const useStyle = () => {
  const { token } = useSiteToken();

  const { antCls } = token;

  return {
    contributorsList: css`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;

      a,
      ${antCls}-avatar + ${antCls}-avatar {
        margin-bottom: 8px;
        margin-inline-end: 8px;
      }
    `,
    toc: css`
      ${antCls}-anchor {
        ${antCls}-anchor-link-title {
          font-size: 12px;
        }
      }
    `,
    tocWrapper: css`
      position: absolute;
      top: 8px;
      right: 0;
      width: 160px;
      margin: 12px 0;
      padding: 8px 8px 8px 4px;
      backdrop-filter: blur(8px);
      border-radius: ${token.borderRadius}px;
      box-sizing: border-box;

      .toc-debug {
        color: ${token['purple-6']};

        &:hover {
          color: ${token['purple-5']};
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px);
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      &.rtl {
        right: auto;
        left: 20px;
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        display: none;
      }
    `,
    articleWrapper: css`
      padding: 0 170px 32px 64px;
      min-height: calc(100vh - 96px - 40px - 64px - 32px);

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        &,
        &.rtl {
          padding-right: 48px;
          padding-left: 48px;
        }
      }
    `,
  };
};

type AnchorItem = {
  id: string;
  title: string;
  children?: AnchorItem[];
};

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  const meta = useRouteMeta();
  const styles = useStyle();
  const { token } = useSiteToken();

  const debugDemos = useMemo(
    () => meta.toc?.filter((item) => item._debug_demo).map((item) => item.id) || [],
    [meta],
  );

  const anchorItems = useMemo(
    () =>
      meta.toc.reduce<AnchorItem[]>((result, item) => {
        if (item.depth === 2) {
          result.push({ ...item });
        } else if (item.depth === 3) {
          const parent = result[result.length - 1];
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push({ ...item });
          }
        }
        return result;
      }, []),
    [meta.toc],
  );

  return (
    <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24}>
      <Affix>
        <section css={styles.tocWrapper}>
          <Anchor
            css={styles.toc}
            affix={false}
            targetOffset={token.marginXXL}
            showInkInFixed
            items={anchorItems.map((item) => ({
              href: `#${item.id}`,
              title: item.title,
              key: item.id,
              children: item.children
                ?.filter((child) => !debugDemos.includes(child.id))
                .map((child) => ({
                  href: `#${child.id}`,
                  title: (
                    <span className={classNames(debugDemos.includes(child.id) && 'toc-debug')}>
                      {child?.title}
                    </span>
                  ),
                  key: child.id,
                })),
            }))}
          />
        </section>
      </Affix>
      <article css={styles.articleWrapper}>
        {meta.frontmatter?.title || meta.frontmatter.subtitle ? (
          <Typography.Title style={{ fontSize: 30 }}>
            {meta.frontmatter?.title}
            {meta.frontmatter.subtitle && (
              <span style={{ marginLeft: 12 }}>{meta.frontmatter.subtitle}</span>
            )}
          </Typography.Title>
        ) : null}

        {/* ?????????????????????????????? */}
        {meta.frontmatter.date || meta.frontmatter.author ? (
          <Typography.Paragraph style={{ opacity: 0.65 }}>
            <Space>
              {meta.frontmatter.date && (
                <span>
                  <CalendarOutlined /> {DayJS(meta.frontmatter.date).format('YYYY-MM-DD')}
                </span>
              )}
              {meta.frontmatter.author &&
                (meta.frontmatter.author as string)?.split(',')?.map((author) => (
                  <Typography.Link href={`https://github.com/${author}`} key={author}>
                    @{author}
                  </Typography.Link>
                ))}
            </Space>
          </Typography.Paragraph>
        ) : null}

        {children}
      </article>
      <Footer />
    </Col>
  );
};

export default Content;
