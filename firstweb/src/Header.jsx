function Header({headerInfo, children}){
    return(
        <>
            <h1>Welcome to header section | {headerInfo.email}</h1>
            {children}
        </>
    );
}

export {Header};

function Card(){
    return(
        <>
            <h1>This is Card div</h1>
        </>
    );
}