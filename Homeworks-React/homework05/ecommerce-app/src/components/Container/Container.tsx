import "./Container.css"
interface ContainerProps {
    children: React.ReactNode
}

export const Container = (props: ContainerProps)=>{
    return(
        <div className="mainContainer">{props.children}</div>
    )
}
