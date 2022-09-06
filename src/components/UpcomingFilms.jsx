const UpcomingFilms = ({upComingFilms}) => {
    return (
        <>
            <form action={upComingFilms} target="_blank">
                <input type="submit" value="View More upgoming releases >>>" />
            </form>
        </>

    )
};

export default UpcomingFilms