const Links = ({filmLink, children}) => {
    return (
        <>
        <li>

        <a href={filmLink} target="_blank">
            <h2>{children}</h2>
        </a>
        </li>
        </>
    )

};

export default Links

