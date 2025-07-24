function Random(){
    let number = Math.random()*10

    return(
        <>
        <h1>THIS IS A RANDOM NUMBER : {Math.round(number)}</h1>
        </>
    )
}
export default Random;