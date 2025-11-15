import Link from "next/link";
import "./ParagraphLink.css";

const ParagraphLink = () => {
    return (
        <div>
            <p>Here is a link to the <Link className="my-link" href="https://github.com/slav-gael/next-assignment">GitHub repo</Link> for this site.  
            My final project will a recipe app, where users input ingredients they have on hand, cuisines they're looking for, 
            and receive a variety of recipes.</p>
        </div>
    )
}

export default ParagraphLink;