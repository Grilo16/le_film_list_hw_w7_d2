import Links from "./Links";

const LinkList = ({ filmLinksList }) => {
    const linkListHtml = filmLinksList.map((filmLink)=>{
        return (
            <>
            <Links filmLink={filmLink.url} key={filmLink.id}>{filmLink.name}</Links>
            </>
        )
    });
    return linkListHtml
};

export default LinkList
