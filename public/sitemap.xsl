<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:html="http://www.w3.org/1999/xhtml"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | Ideal Bath Renovations</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            line-height: 1.6;
            padding: 30px 20px;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #ffffff;
            padding: 36px 32px;
            border-bottom: 3px solid #c29b38;
          }
          .brand {
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.02em;
            margin-bottom: 8px;
          }
          .brand span {
            color: #dfba5a;
            font-weight: 500;
          }
          .title {
            font-size: 18px;
            font-weight: 600;
            color: #e2e8f0;
            margin-bottom: 8px;
          }
          .desc {
            font-size: 14px;
            color: #94a3b8;
            max-width: 780px;
          }
          .meta-bar {
            background-color: #f1f5f9;
            padding: 14px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e2e8f0;
            font-size: 13px;
            color: #475569;
            flex-wrap: wrap;
            gap: 10px;
          }
          .meta-bar strong {
            color: #0f172a;
          }
          .table-wrap {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13.5px;
            text-align: left;
          }
          th {
            background-color: #f8fafc;
            color: #475569;
            font-weight: 700;
            padding: 14px 18px;
            border-bottom: 1px solid #cbd5e1;
            text-transform: uppercase;
            font-size: 11.5px;
            letter-spacing: 0.05em;
          }
          td {
            padding: 14px 18px;
            border-bottom: 1px solid #f1f5f9;
            color: #334155;
            vertical-align: middle;
          }
          tr:hover td {
            background-color: #fffdf7;
          }
          a {
            color: #0f172a;
            text-decoration: none;
            font-weight: 600;
            word-break: break-all;
          }
          a:hover {
            color: #c29b38;
            text-decoration: underline;
          }
          .badge-freq {
            display: inline-block;
            padding: 3px 9px;
            border-radius: 12px;
            font-size: 11.5px;
            font-weight: 600;
            text-transform: capitalize;
            background-color: #eff6ff;
            color: #1d4ed8;
          }
          .priority-tag {
            font-weight: 700;
            color: #0f172a;
          }
          .footer {
            padding: 20px 32px;
            background-color: #f8fafc;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 12.5px;
            color: #64748b;
          }
          .footer a {
            color: #c29b38;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand">IDEAL BATH <span>RENOVATIONS</span></div>
            <div class="title">XML Sitemap Index</div>
            <p class="desc">
              This XML Sitemap is generated according to standard Sitemaps.org protocols to inform search engines (Google, Bing) and AI crawlers about available URLs, canonical paths, priorities, and update frequencies.
            </p>
          </div>
          <div class="meta-bar">
            <div>Total Indexed URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></div>
            <div>Format: <strong>Sitemaps.org XML 0.9</strong></div>
            <div>Direct Phone: <strong>(672) 273-0434</strong> | Email: <strong>info@idealbathrenovations.ca</strong></div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 50px;">#</th>
                  <th>URL (Page Location)</th>
                  <th style="width: 140px;">Change Frequency</th>
                  <th style="width: 90px;">Priority</th>
                  <th style="width: 130px;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td style="color: #94a3b8; font-weight: 600;"><xsl:value-of select="position()"/></td>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span class="badge-freq">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </span>
                    </td>
                    <td>
                      <span class="priority-tag">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td style="color: #64748b; font-size: 13px;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <div class="footer">
            Ideal Bath Renovations &#8226; 20819 78B Avenue, Langley Twp, BC V2Y 0A1 &#8226; Phone: (672) 273-0434 &#8226; Email: info@idealbathrenovations.ca &#8226; <a href="/">Return to Homepage</a>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
