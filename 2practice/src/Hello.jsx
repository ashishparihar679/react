import Button from "./Button";
function Hello(){
    let n = "Ashish";
    let fullname = () =>{
        return 'ASHISH PARIHAR';
    }
    return(
        <>
        <h1>hello my name is {fullname()} parihar</h1>
            <Button></Button>
        </>
    )
}
export default Hello;