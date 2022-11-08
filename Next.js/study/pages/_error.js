// 500 페이지 처리 : https://nextjs.org/docs/advanced-features/custom-error-page#500-page
function Error({statusCode}) {
    return (
        <p>
            {
                statusCode
                ? `An error ${statusCode} occured on server`
                : `An error occurred on client`
            }
        </p>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode};
}

export default Error;