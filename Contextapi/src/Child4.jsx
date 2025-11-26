import { aryan } from './Child2'

const Child4 = () => {
  return (
    <>
    <div>Child4</div>

    <aryan.Consumer>
        {
            (e)=>(
                <h1>{e}</h1>
            )
        }
    </aryan.Consumer>
    </>
  )
}

export default Child4