export default function Joke(props)
{
        return (
                <>
                        <div>
                                <h3>Joke Setup</h3>
                                <p>{props.setup}</p>
                        </div>
                        <div>
                                <h3>Joke Punchline</h3>
                                <p>{props.punchline}</p>
                        </div>
                </>
        )
}
