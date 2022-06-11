import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";

export async function getStaticProps({ params }) {
    const markdownPath = path.join(process.cwd(), 'README.md');
    const markDownFileContent = fs.readFileSync(markdownPath, "utf8");
    const markDownContent = await remark().use(html).process(markDownFileContent);
    return {
        props: {
            markdownHtml: markDownContent.toString()
        }
    };
}

export default function Post({ markdownHtml }) {
    return (
        <div className="markDownContentWrapper">
            <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
        </div>
    );
}
