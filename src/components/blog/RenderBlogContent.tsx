/**
 * Renders blog content from the Laravel CMS. The CMS sanitizes this HTML
 * server-side (Filament RichContentRenderer::toHtml) before returning it.
 */
export default function RenderBlogContent({ html }: { html: string }) {
  return (
    <div
      className="blog-rich-content text-base text-gray-600 [&_p]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_a]:underline [&_img]:rounded-lg [&_img]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic"
      dangerouslySetInnerHTML={{ __html: html ?? "" }}
    />
  );
}
